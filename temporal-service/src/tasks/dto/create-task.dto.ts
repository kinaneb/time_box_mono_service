import { ApiProperty } from '@nestjs/swagger';
import { Priority, State } from '@prisma/client';
import { CreateTimeboxDto } from 'src/timeboxs/dto/create-timebox.dto';
import { CreateTimeslotDto } from 'src/timeslots/dto/create-timeslot.dto';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const createTaskSchema = z.object({
  title: z.string().min(5).nonempty(),
  state: z.enum(['NOT_ASSIGNED', 'SUCCESS', 'FAILED']),
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
});
export class CreateTaskDto extends createZodDto(createTaskSchema) {}
