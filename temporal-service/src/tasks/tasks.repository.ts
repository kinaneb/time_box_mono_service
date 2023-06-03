import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksRepository {
  constructor(private prisma: PrismaService) {}

  async createTask(params: { data: Prisma.TaskCreateInput }): Promise<Task> {
    const { data } = params;
    return this.prisma.task.create({ data });
  }

  async getTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async getTask(id: number): Promise<Task> {
    return this.prisma.task.findUnique({
      where: {
        id,
      },
    });
  }

  // async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
  //   return this.prisma.task.update({
  //     where: {
  //       id,
  //     },
  //     data: updateTaskDto,
  //   });
  // }

  async deleteTask(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
