import { TimeslotsService } from './timeslots.service';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { UpdateTimeslotDto } from './dto/update-timeslot.dto';
export declare class TimeslotsController {
    private readonly timeslotsService;
    constructor(timeslotsService: TimeslotsService);
    create(createTimeslotDto: CreateTimeslotDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        uuid: string;
        startAt: Date;
        duration: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        uuid: string;
        startAt: Date;
        duration: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findOne(uuid: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        uuid: string;
        startAt: Date;
        duration: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    update(uuid: string, updateTimeslotDto: UpdateTimeslotDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        uuid: string;
        startAt: Date;
        duration: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    remove(uuid: string): Promise<void>;
}
