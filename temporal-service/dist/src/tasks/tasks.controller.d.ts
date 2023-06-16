import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(dto: CreateTaskDto): Promise<import(".prisma/client").Task>;
    findAll(): Promise<import(".prisma/client").Task[]>;
    findOne(uuid: string): Promise<import(".prisma/client").Task>;
    update(uuid: string, updateTaskDto: UpdateTaskDto): Promise<import(".prisma/client").Task>;
    remove(uuid: string): Promise<import(".prisma/client").Task>;
}
