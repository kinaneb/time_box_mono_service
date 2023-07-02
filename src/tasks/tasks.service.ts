import { Global, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './tasks.repository';
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private repository: TasksRepository) {}

  async create(dto: CreateTaskDto) {
    try {
      return await this.repository.createTask(dto);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    return await this.repository.getTasks();
  }

  async findOne(uuid: string): Promise<Task> {
    return await this.repository.getTask(uuid);
  }

  async update(uuid: string, updateTaskDto: UpdateTaskDto) {
    return await this.repository.updateTask(uuid, updateTaskDto);
  }

  async remove(uuid: string): Promise<void> {
    return await this.repository.deleteTask(uuid);
  }
}
