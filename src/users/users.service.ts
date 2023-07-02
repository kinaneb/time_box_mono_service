import {ForbiddenException, Injectable} from '@nestjs/common';
import {
    CheckPasswordRequest,
    CheckPasswordResponse,
    CheckPasswordStatus,
    CreateUserRequest, FindUserByEmailRequest,
    FindUserByIdRequest
} from "./users.dto";
import { PrismaService } from 'src/prisma/prisma.service';
import {PrismaClientKnownRequestError} from "@prisma/client/runtime";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}
    async findAll() {
        return this.prisma.user.findMany()
    }

    async findUserById(body: FindUserByIdRequest) {
        return this.prisma.user.findUnique({
            where: {
                uuid: body.id
            }
        })
    }
    async findUserByEmail(body: FindUserByEmailRequest) {
        return this.prisma.user.findUnique({
            where: {
                email: body.email
            }
        })
    }
    delete(body: FindUserByIdRequest){
        return this.prisma.user.delete({
            where: {
                uuid: body.id
            }
        })
    }

    async createUser(body: CreateUserRequest) {
        try {
            const user = await this.prisma.user.create({
                data: body
            });
            // delete user.password;
            return user;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials taken');
                }
            }
            throw error;
        }
    }
}
