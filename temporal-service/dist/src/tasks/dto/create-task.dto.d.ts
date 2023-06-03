import { z } from 'nestjs-zod/z';
declare const CreateTaskDto_base: import("nestjs-zod").ZodDto<{
    title?: string;
    state?: "NOT_ASSIGNED" | "SUCCESS" | "FAILED";
    priority?: "LOW" | "MEDIUM" | "HIGH";
    timebox?: {
        title?: string;
        tasks?: string[];
    };
    timeboxslot?: {
        startAt?: string;
        duration?: string;
    };
    createdBy?: string;
}, z.ZodObjectDef<{
    title: z.ZodString;
    state: z.ZodEnum<["NOT_ASSIGNED", "SUCCESS", "FAILED"]>;
    priority: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
    timebox: z.ZodObject<{
        title: z.ZodString;
        tasks: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        title?: string;
        tasks?: string[];
    }, {
        title?: string;
        tasks?: string[];
    }>;
    timeboxslot: z.ZodObject<{
        startAt: z.ZodString;
        duration: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        startAt?: string;
        duration?: string;
    }, {
        startAt?: string;
        duration?: string;
    }>;
    createdBy: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    title?: string;
    state?: "NOT_ASSIGNED" | "SUCCESS" | "FAILED";
    priority?: "LOW" | "MEDIUM" | "HIGH";
    timebox?: {
        title?: string;
        tasks?: string[];
    };
    timeboxslot?: {
        startAt?: string;
        duration?: string;
    };
    createdBy?: string;
}>;
export declare class CreateTaskDto extends CreateTaskDto_base {
}
export {};
