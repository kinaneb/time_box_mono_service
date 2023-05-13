import { ApiProperty } from '@nestjs/swagger';
import { Priority, State } from '@prisma/client';
import { CreateTimeboxDto } from 'src/timeboxs/dto/create-timebox.dto';
import { CreateTimeslotDto } from 'src/timeslots/dto/create-timeslot.dto';

export class CreateTaskDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  state: State;
  @ApiProperty()
  priority: Priority;
  @ApiProperty()
  createdBy: string;
  @ApiProperty({ type: () => CreateTimeslotDto })
  timeslot: null;
  @ApiProperty({ type: () => CreateTimeboxDto })
  timebox: null;
  @ApiProperty()
  createdAt: Date | string;
  @ApiProperty()
  updatedAt: Date | string;
}
