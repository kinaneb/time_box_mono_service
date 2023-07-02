import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {JwtService} from "@nestjs/jwt";
import {CreateRefreshTokenDto, UpdateRefreshTokenDto} from "./dto";
import {LogoutDto} from "../users/users.dto";
@Injectable()
export class RefreshTokensService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService) {
    }
    async createRefreshToken(dto: CreateRefreshTokenDto) {
        const refreshTokenJWT = this.jwtService.sign(
            {userId: dto.userId, deviceIp: dto.deviceIp},
            {secret: process.env.REFRESH_TOKEN_AUTH_SERVICE_SECRET,
                expiresIn: process.env.REFRESH_TOKEN_AUTH_SERVICE_EXPIRES_IN});
        const foundedRefreshToken = await this.prisma.refreshToken.findUnique({
            where: {
                deviceIp_userId: {userId: dto.userId, deviceIp: dto.deviceIp}
            }
        });
        if(!foundedRefreshToken) {
            const refreshToken = await this.prisma.refreshToken.create({
                data: {
                    refreshToken: refreshTokenJWT,
                    ...dto
                }
            });
            return refreshTokenJWT;
        }
        else {
            return foundedRefreshToken.refreshToken;
        }
    }
    async updateRefreshToken(dto: UpdateRefreshTokenDto) {
        return this.prisma.refreshToken.update({
            where: {
                deviceIp_userId: {userId: dto.userId, deviceIp: dto.deviceIp}
            },
            data: {
                ...dto
            }
        });
    }
    async deleteRefreshToken(dto: LogoutDto) {
        return this.prisma.refreshToken.delete({
            where: {
                deviceIp_userId: {userId: dto.uuid, deviceIp: dto.deviceIp}
            }
        });
    }
    async find(dto: CreateRefreshTokenDto) {
        return this.prisma.refreshToken.findUnique({
            where: {
                deviceIp_userId: {userId: dto.userId, deviceIp: dto.deviceIp}
            }
        });
    }
}