import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const createTaskSchema = z.object({
  title: z.string().min(5).nonempty(),
  state: z.enum(['NOT_ASSIGNED', 'SUCCESS', 'FAILED']).default('NOT_ASSIGNED'),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']),
  timebox: z.object({
    title: z.string(),
    tasks: z.array(z.string()),
  }),
  timeboxslot: z.object({
    startAt: z.string().datetime(),
    duration: z.string().datetime(),
  }),
  createdBy: z.string(),
  // user: z.object({
  //   username: z.string()
  // })
});

export class CreateTaskDto extends createZodDto(createTaskSchema) {}
