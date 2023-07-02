import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TimeslotsService } from './timeslots.service';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { UpdateTimeslotDto } from './dto/update-timeslot.dto';

@Controller('timeslots')
export class TimeslotsController {
  constructor(private readonly timeslotsService: TimeslotsService) {}

  @Post()
  create(@Body() createTimeslotDto: CreateTimeslotDto) {
    return this.timeslotsService.create(createTimeslotDto);
  }

  @Get()
  findAll() {
    return this.timeslotsService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.timeslotsService.findOne(uuid);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateTimeslotDto: UpdateTimeslotDto,
  ) {
    return this.timeslotsService.update(uuid, updateTimeslotDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.timeslotsService.remove(uuid);
  }
}
