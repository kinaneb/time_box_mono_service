"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const z_1 = require("nestjs-zod/z");
const createTaskSchema = z_1.z.object({
    title: z_1.z.string(),
    state: z_1.z.enum(['NOT_ASSIGNED', 'SUCCESS', 'FAILED']),
    priority: z_1.z.enum(['NOT_ASSIGNED', 'SUCCESS', 'FAILED']),
    timebox: z_1.z.object({
        title: z_1.z.string(),
        tasks: z_1.z.array(z_1.z.string()),
    }),
    timeboxslot: z_1.z.object({
        startAt: z_1.z.string().datetime(),
        duration: z_1.z.string().datetime(),
    }),
});
//# sourceMappingURL=create-task-schema.js.map