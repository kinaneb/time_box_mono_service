import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './tasks.repository';
import { Task } from '@prisma/client';
export declare class TasksService {
    private repository;
    constructor(repository: TasksRepository);
    create(dto: CreateTaskDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        uuid: string;
        title: string | null;
        state: import(".prisma/client").State;
        priority: import(".prisma/client").Priority | null;
        timeboxId: number | null;
        timeslotId: number | null;
        createdBy: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        uuid: string;
        title: string | null;
        state: import(".prisma/client").State;
        priority: import(".prisma/client").Priority | null;
        timeboxId: number | null;
        timeslotId: number | null;
        createdBy: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findOne(uuid: string): Promise<Task>;
    update(uuid: string, updateTaskDto: UpdateTaskDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        uuid: string;
        title: string | null;
        state: import(".prisma/client").State;
        priority: import(".prisma/client").Priority | null;
        timeboxId: number | null;
        timeslotId: number | null;
        createdBy: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    remove(uuid: string): Promise<void>;
}
