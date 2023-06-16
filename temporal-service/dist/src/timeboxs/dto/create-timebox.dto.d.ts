import { z } from 'nestjs-zod/z';
declare const CreateTimeboxDto_base: import("nestjs-zod").ZodDto<{
    id?: number;
    title?: string;
}, z.ZodObjectDef<{
    id: z.ZodNumber;
    title: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny>, {
    id?: number;
    title?: string;
}>;
export declare class CreateTimeboxDto extends CreateTimeboxDto_base {
}
export {};
