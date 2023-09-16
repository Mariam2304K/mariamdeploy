import { Test, TestingModule } from '@nestjs/testing';
import { SyntheseService } from './synthese.service';

describe('SyntheseService', () => {
  let service: SyntheseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SyntheseService],
    }).compile();

    service = module.get<SyntheseService>(SyntheseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
