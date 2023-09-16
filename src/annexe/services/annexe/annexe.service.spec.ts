import { Test, TestingModule } from '@nestjs/testing';
import { AnnexeService } from './annexe.service';

describe('AnnexeService', () => {
  let service: AnnexeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnexeService],
    }).compile();

    service = module.get<AnnexeService>(AnnexeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
