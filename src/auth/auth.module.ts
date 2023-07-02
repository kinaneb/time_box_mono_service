import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {PrismaService} from "../prisma/prisma.service";
import {RefreshTokensService} from "../refresh-tokens/refresh-tokens.service";
import {PassportModule} from "@nestjs/passport";
import {AccessTokenStrategy, RefreshTokenStrategy} from "./passport.startegies";

@Module({
    imports: [PassportModule],
    controllers: [AuthController],
    providers: [AuthService, UsersService, JwtService, PrismaService, RefreshTokensService, AccessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}