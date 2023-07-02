import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {JwtService} from "@nestjs/jwt";
import {CreateRefreshTokenDto, UpdateRefreshTokenDto} from "./dto";
@Injectable()
export class RefreshTokensService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService) {
    }
    async createRefreshToken(dto: CreateRefreshTokenDto) {
        const refreshTokenJWT = this.jwtService.sign(
            {userId: dto.userId},
            {secret: process.env.REFRESH_TOKEN_AUTH_SERVICE_SECRET,
                expiresIn: process.env.REFRESH_TOKEN_AUTH_SERVICE_EXPIRES_IN});
        const refreshToken = await this.prisma.refreshToken.create({
            data: {
                refreshToken: refreshTokenJWT,
                ...dto
            }
        });
        console.log("in RefreshTokensService: ", refreshTokenJWT);
        return refreshTokenJWT;
    }
    async updateRefreshToken(dto: UpdateRefreshTokenDto) {
        return this.prisma.refreshToken.update({
            where: {
                refreshToken: dto.refreshToken
            },
            data: {
                ...dto,
                createdAt: new Date()
            }
        });
    }
}
