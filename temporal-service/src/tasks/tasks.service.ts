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
      const task = await this.repository.createTask(dto); 
      return task;
    } catch (error) {
      throw error;
    }
    
  }

  async findAll() {
    return await this.repository.getTasks();
  }

  async findOne(id: number) {
    return await this.repository.getTask(id);
  }

  // async update(id: number, updateTaskDto: UpdateTaskDto) {
  //   return await this.repository.updateTask(id, updateTaskDto);
  // }

  async remove(id: number) {
    return await this.repository.deleteTask(id);
  }
}
