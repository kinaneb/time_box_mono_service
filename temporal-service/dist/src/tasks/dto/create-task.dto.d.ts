import { z } from 'nestjs-zod/z';
declare const CreateTaskDto_base: import("nestjs-zod").ZodDto<{
    title: string;
    createdBy: string;
    state: "NOT_ASSIGNED" | "SUCCESS" | "FAILED";
    priority: "LOW" | "MEDIUM" | "HIGH";
    timebox: number;
    timeslot: number;
}, z.ZodObjectDef<{
    title: z.ZodString;
    state: z.ZodDefault<z.ZodEnum<["NOT_ASSIGNED", "SUCCESS", "FAILED"]>>;
    priority: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
    timebox: z.ZodNumber;
    timeslot: z.ZodNumber;
    createdBy: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    title: string;
    createdBy: string;
    priority: "LOW" | "MEDIUM" | "HIGH";
    timebox: number;
    timeslot: number;
    state?: "NOT_ASSIGNED" | "SUCCESS" | "FAILED" | undefined;
}>;
export declare class CreateTaskDto extends CreateTaskDto_base {
}
export {};
