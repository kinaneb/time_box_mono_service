import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createTask(params: {
        data: Prisma.TaskCreateInput;
    }): Promise<Task>;
    getTasks(): Promise<Task[]>;
    getTask(id: number): Promise<Task>;
    updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task>;
    deleteTask(id: number): Promise<Task>;
}
