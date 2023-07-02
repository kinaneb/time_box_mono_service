import { z } from "nestjs-zod/z"
import {createZodDto} from "nestjs-zod";

export const RefreshTokenSchema = z.object({
    refreshToken: z.string(),
    createdAt: z.date(),
    userId: z.string().uuid(),
    deviceIp: z.string().ip(),
    blacklisted: z.boolean().default(false).optional()
})

export class CreateRefreshTokenDto extends createZodDto(RefreshTokenSchema.pick({userId: true, deviceIp: true})) {}
export class UpdateRefreshTokenDto extends createZodDto(RefreshTokenSchema) {}