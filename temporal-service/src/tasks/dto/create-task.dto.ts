import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { CreateTimeboxDto } from '../../timeboxs/dto/create-timebox.dto';

const createTaskSchema = z.object({
  title: z.string().min(5).nonempty(),
  state: z.enum(['NOT_ASSIGNED', 'SUCCESS', 'FAILED']).default('NOT_ASSIGNED'),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']),
  timebox: z.number(),
  timeslot: z.number(),
  createdBy: z.string(),
});

export class CreateTaskDto extends createZodDto(createTaskSchema) {}
