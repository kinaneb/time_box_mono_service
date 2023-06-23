import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { UpdateTimeslotDto } from './dto/update-timeslot.dto';
import { TimeslotRepository } from './timeslot.repository';
import { Timeslot } from '@prisma/client';
export declare class TimeslotsService {
    private readonly timeslotRepository;
    constructor(timeslotRepository: TimeslotRepository);
    create(createTimeslotDto: CreateTimeslotDto): Promise<Timeslot>;
    findAll(): Promise<Timeslot[]>;
    findOne(uuid: string): Promise<Timeslot>;
    update(uuid: string, updateTimeslotDto: UpdateTimeslotDto): Promise<Timeslot>;
    remove(uuid: string): Promise<void>;
}
