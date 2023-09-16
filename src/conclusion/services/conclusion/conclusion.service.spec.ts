import { Test, TestingModule } from '@nestjs/testing';
import { ConclusionService } from './conclusion.service';

describe('ConclusionService', () => {
  let service: ConclusionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConclusionService],
    }).compile();

    service = module.get<ConclusionService>(ConclusionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
