import { Injectable, NotFoundException } from '@nestjs/common';
import { Timebox } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTimeboxDto } from './dto/create-timebox.dto';
import { UpdateTimeboxDto } from './dto/update-timebox.dto';

@Injectable()
export class TimeboxRepository {
  constructor(private prisma: PrismaService) {}

  async createTimebox(dto: CreateTimeboxDto): Promise<Timebox> {
    return await this.prisma.timebox.create({
      data: dto,
    });
  }

  async getTimeboxs(): Promise<Timebox[]> {
    return await this.prisma.timebox.findMany();
  }

  async getTimebox(uuid: string): Promise<Timebox> {
    const timebox = await this.prisma.timebox.findUnique({
      where: {
        uuid,
      },
    });

    if (!timebox) {
      throw new NotFoundException();
    }

    return timebox;
  }

  async updateTimebox(
    uuid: string,
    updateTimeboxDto: UpdateTimeboxDto,
  ): Promise<Timebox> {
    const timebox = await this.prisma.timebox.findUnique({
      where: {
        uuid,
      },
    });

    if (!timebox) {
      throw new NotFoundException();
    }

    return this.prisma.timebox.update({
      where: {
        uuid,
      },
      data: updateTimeboxDto,
    });
  }

  async deleteTimebox(uuid: string): Promise<void> {
    await this.prisma.timebox.delete({
      where: {
        uuid,
      },
    });
  }
}
