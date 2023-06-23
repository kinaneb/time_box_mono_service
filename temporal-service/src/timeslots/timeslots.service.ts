import { Injectable } from '@nestjs/common';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { UpdateTimeslotDto } from './dto/update-timeslot.dto';
import { TimeslotRepository } from './timeslot.repository';
import { Timeslot } from '@prisma/client';

@Injectable()
export class TimeslotsService {
  constructor(private readonly timeslotRepository: TimeslotRepository) {}
  create(createTimeslotDto: CreateTimeslotDto): Promise<Timeslot> {
    return this.timeslotRepository.createTimebox(createTimeslotDto);
  }

  findAll(): Promise<Timeslot[]> {
    return this.timeslotRepository.getTimeslots();
  }

  findOne(uuid: string): Promise<Timeslot> {
    return this.timeslotRepository.getTimeslot(uuid);
  }

  update(
    uuid: string,
    updateTimeslotDto: UpdateTimeslotDto,
  ): Promise<Timeslot> {
    return this.timeslotRepository.updateTimeslot(uuid, updateTimeslotDto);
  }

  remove(uuid: string): Promise<void> {
    return this.timeslotRepository.deleteTimeslot(uuid);
  }
}
