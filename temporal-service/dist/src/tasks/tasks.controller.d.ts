import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(dto: CreateTaskDto): Promise<import(".prisma/client").Task>;
    findAll(): Promise<import(".prisma/client").Task[]>;
    findOne(id: string): Promise<import(".prisma/client").Task>;
    remove(id: string): Promise<import(".prisma/client").Task>;
}
