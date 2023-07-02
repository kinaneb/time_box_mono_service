import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {PrismaService} from "../prisma/prisma.service";
import {RefreshTokensService} from "../refresh-tokens/refresh-tokens.service";

@Module({
    controllers: [AuthController],
    providers: [AuthService, UsersService, JwtService, PrismaService, RefreshTokensService],
})
export class AuthModule {}