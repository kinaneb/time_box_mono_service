import { Injectable } from '@nestjs/common';
import { CreateTimeboxDto } from './dto/create-timebox.dto';
import { UpdateTimeboxDto } from './dto/update-timebox.dto';
import { TimeboxRepository } from './timebox.repository';
import { Timebox } from '@prisma/client';

@Injectable()
export class TimeboxsService {
  constructor(readonly repository: TimeboxRepository) {}
  async create(createTimeboxDto: CreateTimeboxDto) {
    try {
      return await this.repository.createTimebox(createTimeboxDto);
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Timebox[]> {
    return await this.repository.getTimeboxs();
  }

  async findOne(uuid: string): Promise<Timebox> {
    return await this.repository.getTimebox(uuid);
  }

  async update(
    uuid: string,
    updateTimeboxDto: UpdateTimeboxDto,
  ): Promise<Timebox> {
    return await this.repository.updateTimebox(uuid, updateTimeboxDto);
  }

  async remove(uuid: string) {
    return await this.repository.deleteTimebox(uuid);
  }
}
