import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string): Promise<Task> {
    return this.tasksService.findOne(uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(uuid, updateTaskDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.tasksService.remove(uuid);
  }
}
