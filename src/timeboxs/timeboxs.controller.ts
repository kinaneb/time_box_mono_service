import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TimeboxsService } from './timeboxs.service';
import { CreateTimeboxDto } from './dto/create-timebox.dto';
import { UpdateTimeboxDto } from './dto/update-timebox.dto';
import { Timebox } from '@prisma/client';

@Controller('timeboxs')
export class TimeboxsController {
  constructor(private readonly timeboxsService: TimeboxsService) {}

  @Post()
  create(@Body() createTimeboxDto: CreateTimeboxDto) {
    return this.timeboxsService.create(createTimeboxDto);
  }

  @Get()
  findAll(): Promise<Timebox[]> {
    return this.timeboxsService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.timeboxsService.findOne(uuid);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateTimeboxDto: UpdateTimeboxDto,
  ) {
    return this.timeboxsService.update(uuid, updateTimeboxDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.timeboxsService.remove(uuid);
  }
}
