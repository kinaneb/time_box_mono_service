import { CreateTaskDto } from './create-task.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdateTaskDto extends OmitType(CreateTaskDto, [
  'timebox',
  'timeslot',
  'createdBy',
] as const) {}
