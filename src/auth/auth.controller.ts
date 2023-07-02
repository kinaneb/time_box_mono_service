import {Body, Controller, Delete, Post, UseGuards, UseInterceptors, Request, Get} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import {CreateTaskDto} from "../tasks/dto/create-task.dto";
import {CreateUserRequest, LoginRequest, LogoutDto} from "../users/users.dto";
import {AuthInterceptor} from "./auth.interceptor";
import {AuthGuard} from "@nestjs/passport";

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService) {}

    @Post('signup')
    @UseInterceptors(AuthInterceptor)
    signup(@Body() dto: CreateUserRequest) {
        return this.authService.signup(dto);
    }

    @Post('signin')
    @UseInterceptors(AuthInterceptor)
    signin(@Body() dto: LoginRequest) {
        return this.authService.checkPassword(dto);
    }
    @Delete('logout')
    @UseGuards(AuthGuard('jwt'))
    async logout(@Request() req) {
        const user = req.user;
        return this.authService.logout({uuid: user.uuid, deviceIp: req.ip});
    }
    @Get('refresh')
    @UseInterceptors(AuthInterceptor)
    @UseGuards(AuthGuard('jwt-refresh-token'))
    async refresh(@Request() req) {
        const user = req.user;
        return this.authService.refreshTokens({uuid: user.userId, deviceIp: req.ip, refreshToken: user.refreshToken});
    }
}