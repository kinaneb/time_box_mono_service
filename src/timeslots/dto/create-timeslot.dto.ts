import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const createTimeslotSchema = z.object({
  startAt: z.date(),
  duration: z.date(),
});

export class CreateTimeslotDto extends createZodDto(createTimeslotSchema) {}
