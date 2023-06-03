import { z } from 'nestjs-zod/z';

const createTaskSchema = z.object({
  title: z.string(),
  state: z.enum(['NOT_ASSIGNED', 'SUCCESS', 'FAILED']),
  priority: z.enum(['NOT_ASSIGNED', 'SUCCESS', 'FAILED']),
  timebox: z.object({
    title: z.string(),
    tasks: z.array(z.string()),
  }),
  timeboxslot: z.object({
    startAt: z.string().datetime(),
    duration: z.string().datetime(),
  }),
});
