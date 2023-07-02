import { Test, TestingModule } from '@nestjs/testing';
import { TimeboxsController } from './timeboxs.controller';
import { TimeboxsService } from './timeboxs.service';

describe('TimeboxsController', () => {
  let controller: TimeboxsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeboxsController],
      providers: [TimeboxsService],
    }).compile();

    controller = module.get<TimeboxsController>(TimeboxsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
