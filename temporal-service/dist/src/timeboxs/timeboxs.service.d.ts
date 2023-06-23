import { CreateTimeboxDto } from './dto/create-timebox.dto';
import { UpdateTimeboxDto } from './dto/update-timebox.dto';
import { TimeboxRepository } from './timebox.repository';
import { Timebox } from '@prisma/client';
export declare class TimeboxsService {
    readonly repository: TimeboxRepository;
    constructor(repository: TimeboxRepository);
    create(createTimeboxDto: CreateTimeboxDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        uuid: string;
        title: string | null;
        createdBy: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findAll(): Promise<Timebox[]>;
    findOne(uuid: string): Promise<Timebox>;
    update(uuid: string, updateTimeboxDto: UpdateTimeboxDto): Promise<Timebox>;
    remove(uuid: string): Promise<void>;
}
