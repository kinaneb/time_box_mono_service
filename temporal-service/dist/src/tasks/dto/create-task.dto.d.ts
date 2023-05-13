import { Priority, State } from '@prisma/client';
export declare class CreateTaskDto {
    title: string;
    state: State;
    priority: Priority;
    createdBy: string;
    timeslot: null;
    timebox: null;
    createdAt: Date | string;
    updatedAt: Date | string;
}
