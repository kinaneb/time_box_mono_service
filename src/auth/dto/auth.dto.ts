// import { IsEmail, IsNotEmpty } from "class-validator";

import { createZodDto } from "nestjs-zod";
import { z } from "zod";
import {RefreshTokenSchema} from "../../refresh-tokens/dto";
import {CreateUserSchema} from "../../users/users.dto";

const AuthDtoSchema = z.object({
    username: z.string().min(2).max(10),
    password: z.string().min(6).max(8)
})

export class AuthDto extends createZodDto(AuthDtoSchema) {}
export class GenerateAccessTokenDto extends createZodDto(z.object({
    userId: z.string().uuid(),
    deviceIp: z.string().ip(),
})) {}
export class AuthTokensDto extends createZodDto(z.object({
    accessToken: z.string(),
    refreshToken: z.string()
})) {}
export class RefreshJwtPayload extends createZodDto(RefreshTokenSchema.pick({userId: true, deviceIp: true})
    .merge(CreateUserSchema.pick({email: true, role: true}))) {}
export class AccessJwtPayload extends createZodDto(RefreshTokenSchema.pick({userId: true, deviceIp: true}).merge(z.object({clientId: z.string().ip()}))) {}