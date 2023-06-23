import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateTimeboxEvent } from './event/create-timebox.event';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @EventPattern('timebox_created')
  handleTimeboxCreated(data: CreateTimeboxEvent) {
    console.log('tessst');
    this.appService.handleTimeboxCreated(data);
  }
}
