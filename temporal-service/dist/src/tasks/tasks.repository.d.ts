import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '@prisma/client';
export declare class TasksRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createTask(dto: CreateTaskDto): Promise<Task>;
    getTasks(): Promise<Task[]>;
    getTask(uuid: string): Promise<Task>;
    updateTask(uuid: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    deleteTask(uuid: string): Promise<void>;
}
