import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createTask(dto: CreateTaskDto): Promise<Task>;
    getTasks(): Promise<Task[]>;
    getTask(id: number): Promise<Task>;
    deleteTask(id: number): Promise<Task>;
}
