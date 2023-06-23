import { TimeslotsService } from './timeslots.service';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { UpdateTimeslotDto } from './dto/update-timeslot.dto';
export declare class TimeslotsController {
    private readonly timeslotsService;
    constructor(timeslotsService: TimeslotsService);
    create(createTimeslotDto: CreateTimeslotDto): Promise<import(".prisma/client").Timeslot>;
    findAll(): Promise<import(".prisma/client").Timeslot[]>;
    findOne(uuid: string): Promise<import(".prisma/client").Timeslot>;
    update(uuid: string, updateTimeslotDto: UpdateTimeslotDto): Promise<import(".prisma/client").Timeslot>;
    remove(uuid: string): Promise<void>;
}
