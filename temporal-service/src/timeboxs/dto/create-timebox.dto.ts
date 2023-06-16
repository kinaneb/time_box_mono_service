import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const createTimeboxSchema = z.object({
  id: z.number(),
  title: z.string().optional(),
});

export class CreateTimeboxDto extends createZodDto(createTimeboxSchema) {}
