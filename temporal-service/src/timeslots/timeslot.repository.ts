import { Injectable, NotFoundException } from '@nestjs/common';
import { Timeslot } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { UpdateTimeslotDto } from './dto/update-timeslot.dto';

@Injectable()
export class TimeslotRepository {
  constructor(private prisma: PrismaService) {}

  async createTimebox(dto: CreateTimeslotDto): Promise<Timeslot> {
    return this.prisma.timeslot.create({
      data: dto,
    });
  }

  async getTimeslots(): Promise<Timeslot[]> {
    const timeslots = await this.prisma.timeslot.findMany();
    if (!timeslots) {
      throw new NotFoundException();
    }

    return timeslots;
  }

  async getTimeslot(uuid: string): Promise<Timeslot> {
    const timeslot = await this.prisma.timeslot.findUnique({
      where: {
        uuid,
      },
    });

    if (!timeslot) {
      throw new NotFoundException();
    }

    return timeslot;
  }

  async updateTimeslot(
    uuid: string,
    updateTimeboxDto: UpdateTimeslotDto,
  ): Promise<Timeslot> {
    const timeslot = await this.prisma.timeslot.findUnique({
      where: {
        uuid,
      },
    });

    if (!timeslot) {
      throw new NotFoundException();
    }

    return this.prisma.timeslot.update({
      where: {
        uuid,
      },
      data: updateTimeboxDto,
    });
  }

  async deleteTimeslot(uuid: string): Promise<void> {
    await this.prisma.timeslot.delete({
      where: {
        uuid,
      },
    });
  }
}
