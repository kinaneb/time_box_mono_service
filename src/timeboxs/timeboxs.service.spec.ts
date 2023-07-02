import { Test, TestingModule } from '@nestjs/testing';
import { TimeboxsService } from './timeboxs.service';

describe('TimeboxsService', () => {
  let service: TimeboxsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeboxsService],
    }).compile();

    service = module.get<TimeboxsService>(TimeboxsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
