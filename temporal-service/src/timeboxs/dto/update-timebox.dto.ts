import { CreateTimeboxDto } from './create-timebox.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdateTimeboxDto extends OmitType(CreateTimeboxDto, [
  'createdBy',
]) {}
