import {Body, Controller, Post, UseInterceptors} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import {CreateTaskDto} from "../tasks/dto/create-task.dto";
import {CreateUserRequest, LoginRequest} from "../users/users.dto";
import {AuthInterceptor} from "./auth.interceptor";

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
}