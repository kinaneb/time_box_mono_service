import { z } from 'nestjs-zod/z';
declare const CreateTimeslotDto_base: import("nestjs-zod").ZodDto<{
    id?: string;
    startAt?: Date;
    duration?: Date;
}, z.ZodObjectDef<{
    id: z.ZodString;
    startAt: z.ZodDate;
    duration: z.ZodDate;
}, "strip", z.ZodTypeAny>, {
    id?: string;
    startAt?: Date;
    duration?: Date;
}>;
export declare class CreateTimeslotDto extends CreateTimeslotDto_base {
}
export {};
