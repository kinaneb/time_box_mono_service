import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import {CheckPasswordRequest, CheckPasswordResponse, CheckPasswordStatus, CreateUserRequest} from "../users/users.dto";
import {UsersService} from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(
      private prisma: PrismaService,
      private usersService: UsersService
  ) {}

  async signup(dto: CreateUserRequest) {
    const hash = await argon.hash(dto.password);
    return this.usersService.createUser({...dto, password: hash});
  }

  async checkPassword(body: CheckPasswordRequest) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: body.email
      }
    });

    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }

    if (await argon.verify(user.password, body.password)) {
      const  { password ,  ...rest } = user ;
      return { password: body.password, ...rest}
    }
    return CheckPasswordResponse.create({
      status: CheckPasswordStatus.WRONG_PASSWORD,
      undefined
    });
    console.log("user: ", user);
  }
}
