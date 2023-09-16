import { Test, TestingModule } from '@nestjs/testing';
import { MembreequipeService } from './membreequipe.service';

describe('MembreequipeService', () => {
  let service: MembreequipeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MembreequipeService],
    }).compile();

    service = module.get<MembreequipeService>(MembreequipeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
