import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): Promise<import(".prisma/client").Task[]>;
    findOne(id: string): Promise<import(".prisma/client").Task>;
    remove(id: string): Promise<import(".prisma/client").Task>;
}
