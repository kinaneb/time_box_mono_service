import { Global, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '@prisma/client';

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
    const task = await this.prisma.task.findUnique({
      where: {
        uuid,
      },
    });

    if (!task) {
      throw new NotFoundException();
    }

    return task;
  }

  async updateTask(uuid: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.prisma.task.update({
      where: {
        uuid,
      },
      data: updateTaskDto,
    });
  }

  async deleteTask(uuid: string): Promise<void> {
    await this.prisma.task.delete({
      where: {
        uuid,
      },
    });
  }
}
