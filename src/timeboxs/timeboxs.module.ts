import { Module } from '@nestjs/common';
import { TimeboxsService } from './timeboxs.service';
import { TimeboxsController } from './timeboxs.controller';
import { TimeboxRepository } from './timebox.repository';

@Module({
  controllers: [TimeboxsController],
  providers: [TimeboxsService, TimeboxRepository]
})
export class TimeboxsModule {}
