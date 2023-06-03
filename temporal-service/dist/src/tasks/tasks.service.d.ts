import { TasksRepository } from './tasks.repository';
import { Task } from '@prisma/client';
export declare class TasksService {
    private repository;
    constructor(repository: TasksRepository);
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    remove(id: number): Promise<Task>;
}
