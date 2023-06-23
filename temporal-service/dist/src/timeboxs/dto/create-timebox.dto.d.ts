import { z } from 'nestjs-zod/z';
declare const CreateTimeboxDto_base: import("nestjs-zod").ZodDto<{
    title: string;
    createdBy: string;
}, z.ZodObjectDef<{
    createdBy: z.ZodString;
    title: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    title: string;
    createdBy: string;
}>;
export declare class CreateTimeboxDto extends CreateTimeboxDto_base {
}
export {};
