import { z } from "zod"

const AuthSchemaValidation = z.object({
    username : z.string().min(2),
    password: z.string().min(6).max(8)
});