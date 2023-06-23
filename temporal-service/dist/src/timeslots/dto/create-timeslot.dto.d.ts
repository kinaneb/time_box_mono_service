import { z } from 'nestjs-zod/z';
declare const CreateTimeslotDto_base: import("nestjs-zod").ZodDto<{
    startAt: Date;
    duration: Date;
}, z.ZodObjectDef<{
    startAt: z.ZodDate;
    duration: z.ZodDate;
}, "strip", z.ZodTypeAny>, {
    startAt: Date;
    duration: Date;
}>;
export declare class CreateTimeslotDto extends CreateTimeslotDto_base {
}
export {};
