import { Module } from '@nestjs/common';
import { TimeslotsService } from './timeslots.service';
import { TimeslotsController } from './timeslots.controller';
import { TimeslotRepository } from './timeslot.repository';

@Module({
  controllers: [TimeslotsController],
  providers: [TimeslotsService, TimeslotRepository],
})
export class TimeslotsModule {}
