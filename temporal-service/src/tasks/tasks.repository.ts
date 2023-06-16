import { Global, Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksRepository {
  constructor(private prisma: PrismaService) {}

  async createTask(dto: CreateTaskDto): Promise<Task> {
    return this.prisma.task.create({
      data: {
        title: dto.title,
        state: dto.state,
        priority: dto.priority,
        createdBy: dto.createdBy,
        timebox: {
          connect: {
            id: dto.timebox,
          },
        },
        timeslot: {
          connect: {
            id: dto.timeslot,
          },
        },
      },
    });
  }

  async getTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async getTask(uuid: string): Promise<Task> {
    return this.prisma.task.findUnique({
      where: {
        uuid,
      },
    });
  }

  async updateTask(uuid: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.prisma.task.update({
      where: {
        uuid,
      },
      data: updateTaskDto,
    });
  }

  async deleteTask(uuid: string) {
    return this.prisma.task.delete({
      where: {
        uuid,
      },
    });
  }
}
