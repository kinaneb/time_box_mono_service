import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import {AuthTokensDto, GenerateAccessTokenDto} from './dto';
import {
  CheckPasswordRequest,
  CreateUserRequest,
  LogoutDto
} from "../users/users.dto";
import {UsersService} from "../users/users.service";
import {RefreshTokensService} from "../refresh-tokens/refresh-tokens.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
      private prisma: PrismaService,
      private usersService: UsersService,
      private readonly refreshTokenService: RefreshTokensService,
      private readonly jwtService: JwtService
  ) {}

  generateAccessToken(dto:GenerateAccessTokenDto) {
    return this.jwtService.sign(
        {userId: dto.userId, deviceIp: dto.deviceIp},
        {secret: process.env.ACCESS_TOKEN_AUTH_SERVICE_SECRET,
          expiresIn: process.env.ACCESS_TOKEN_AUTH_SERVICE_EXPIRES_IN});
  }

  async signup(dto: CreateUserRequest) {
    const hash = await argon.hash(dto.password);
    const {password,deviceIp, ...rest} = dto;
    const uuid = await this.usersService.createUser({...rest, password: hash});
    if(!uuid) {
        throw new ForbiddenException('User already exists');
    }
    const refreshToken = await this.refreshTokenService.createRefreshToken({userId: uuid.uuid, deviceIp: dto.deviceIp});
    const accessToken = this.generateAccessToken({userId: uuid.uuid, deviceIp: deviceIp});
    return AuthTokensDto.create({accessToken, refreshToken});
  }

  async checkPassword(body: CheckPasswordRequest) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: body.email
      }
    });

    if (!user) {
      throw new ForbiddenException('Credentials incorrect: user not found');
    }

    if (await argon.verify(user.password, body.password)) {
      const  { password ,  ...rest } = user ;
      const refreshToken = await this.refreshTokenService.createRefreshToken({userId: user.uuid, deviceIp: body.deviceIp});
      return {
        accessToken: this.generateAccessToken({userId: user.uuid, deviceIp: body.deviceIp}),
        refreshToken: refreshToken
      };
    } else {
      throw new ForbiddenException('Credentials incorrect: password incorrect');
    }
  }
  async logout(dto : LogoutDto) {
    await this.refreshTokenService.deleteRefreshToken(dto);
  }
  async refreshTokens(dto: any) {

    const accessToken = this.generateAccessToken({userId: dto.uuid, deviceIp: dto.deviceIp});
    return AuthTokensDto.create({accessToken, refreshToken: dto.refreshToken});
  }
}
