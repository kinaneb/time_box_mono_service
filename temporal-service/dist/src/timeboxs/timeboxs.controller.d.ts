import { TimeboxsService } from './timeboxs.service';
import { CreateTimeboxDto } from './dto/create-timebox.dto';
import { UpdateTimeboxDto } from './dto/update-timebox.dto';
import { Timebox } from '@prisma/client';
export declare class TimeboxsController {
    private readonly timeboxsService;
    constructor(timeboxsService: TimeboxsService);
    create(createTimeboxDto: CreateTimeboxDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        uuid: string;
        title: string | null;
        createdBy: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findAll(): Promise<Timebox[]>;
    findOne(uuid: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        uuid: string;
        title: string | null;
        createdBy: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    update(uuid: string, updateTimeboxDto: UpdateTimeboxDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        uuid: string;
        title: string | null;
        createdBy: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    remove(uuid: string): Promise<void>;
}
