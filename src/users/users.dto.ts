import { z } from 'nestjs-zod/z'
import { createZodDto } from "nestjs-zod"
import { Role } from '@prisma/client'
export const CreateUserSchema = z.object({
    firstname: z.string().min(2).max(64),
    lastname: z.string().min(2).max(64),
    email: z.string().email(),
    password: z.password().min(6).max(64).atLeastOne("digit"),
    role: z.nativeEnum(Role).optional()
})
//.passthrough()
export const UpdateUserSchema = z.object({
    firstname: z.string().min(2).max(64).optional(),
    lastname: z.string().min(2).max(64).optional(),
    email: z.string().email().optional(),
    password: z.password().min(6).max(64).atLeastOne("digit").optional()
})


export enum CheckPasswordStatus {
    OK = 0,
    WRONG_PASSWORD = 1,
    NOT_FOUND = 2,
    INTERNAL = 3,
    UNRECOGNIZED = -1,
}


export class FindUserByIdRequest extends createZodDto(z.object({id: z.string().uuid()})) {}
export class FindUserByEmailRequest extends createZodDto(CreateUserSchema.pick({email: true})) {}
export class FindUserByResponse extends createZodDto(z.object({user: z.optional(CreateUserSchema.merge(z.object({id: z.string().uuid()})))})) {}

export class User extends createZodDto(CreateUserSchema.merge( z.object({
    id: z.string().uuid(),
}))) {}
export class CreateUserRequest extends createZodDto(CreateUserSchema.omit({ role: true })) {}
export class CheckPasswordRequest extends createZodDto(CreateUserSchema.pick({email: true, password: true})) {}
export class CheckPasswordResponse extends createZodDto(
    z.object({
        status: z.nativeEnum(CheckPasswordStatus),
        user: z.optional(CreateUserSchema.merge(z.object({id: z.string().uuid()}))),
    })) {}
export class UpdateUserRequest extends createZodDto(UpdateUserSchema) {}

export class LoginRequest extends createZodDto(
    CreateUserSchema.pick({
        email: true, password: true})
        .merge(z.object({clientIp: z.string().ip()}))) {}
export class LoginResponse extends createZodDto(
    z.object({status: z.nativeEnum(CheckPasswordStatus)})
        .merge(z.object({
            accessToken: z.string().optional(),
            refreshToken: z.string().optional()
        }))) {}