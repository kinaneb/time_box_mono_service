import { z } from "zod";
declare const AuthDto_base: import("nestjs-zod").ZodDto<{
    username: string;
    password: string;
}, z.ZodObjectDef<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    username: string;
    password: string;
}>;
export declare class AuthDto extends AuthDto_base {
}
export {};
