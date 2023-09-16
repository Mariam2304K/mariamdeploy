import { Test, TestingModule } from '@nestjs/testing';
import { ControlenvService } from './controlenv.service';

describe('ControlenvService', () => {
  let service: ControlenvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ControlenvService],
    }).compile();

    service = module.get<ControlenvService>(ControlenvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
