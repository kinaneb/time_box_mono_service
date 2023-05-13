import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './tasks.repository';
import { Task } from '@prisma/client';
export declare class TasksService {
    private repository;
    constructor(repository: TasksRepository);
    create(params: {
        createTaskDto: CreateTaskDto;
    }): Promise<void>;
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task>;
    remove(id: number): Promise<Task>;
}
