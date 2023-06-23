import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './tasks.repository';
import { Task } from '@prisma/client';
export declare class TasksService {
    private repository;
    constructor(repository: TasksRepository);
    create(dto: CreateTaskDto): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(uuid: string): Promise<Task>;
    update(uuid: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    remove(uuid: string): Promise<void>;
}
