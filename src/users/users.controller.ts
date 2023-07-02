import {Controller, Get, UseGuards, UseInterceptors} from '@nestjs/common';
import {UsersService} from "./users.service";
import {AuthGuard} from "@nestjs/passport";
import {AuthInterceptor} from "../auth/auth.interceptor";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    @UseInterceptors(AuthInterceptor)
    @UseGuards(AuthGuard('jwt'))
    findAll() {
        return this.usersService.findAll();
    }
}
