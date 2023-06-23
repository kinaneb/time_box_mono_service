import { Injectable } from '@nestjs/common';
import { CreateTimeboxEvent } from './event/create-timebox.event';

@Injectable()
export class AppService {
  handleTimeboxCreated(data: CreateTimeboxEvent) {
    console.log('handleTimeboxCreated - TEMPORAL');
  }
}
