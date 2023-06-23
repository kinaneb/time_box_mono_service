import { TimeboxsService } from './timeboxs.service';
import { CreateTimeboxDto } from './dto/create-timebox.dto';
import { UpdateTimeboxDto } from './dto/update-timebox.dto';
import { Timebox } from '@prisma/client';
export declare class TimeboxsController {
    private readonly timeboxsService;
    constructor(timeboxsService: TimeboxsService);
    create(createTimeboxDto: CreateTimeboxDto): Promise<Timebox>;
    findAll(): Promise<Timebox[]>;
    findOne(uuid: string): Promise<Timebox>;
    update(uuid: string, updateTimeboxDto: UpdateTimeboxDto): Promise<Timebox>;
    remove(uuid: string): Promise<void>;
}
