import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const createTimeboxSchema = z.object({
  createdBy: z.string(),
  title: z.string(),
});

export class CreateTimeboxDto extends createZodDto(createTimeboxSchema) {}
