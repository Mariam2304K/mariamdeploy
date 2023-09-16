import { Test, TestingModule } from '@nestjs/testing';
import { OperateurService } from './operateur.service';

describe('OperateurService', () => {
  let service: OperateurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperateurService],
    }).compile();

    service = module.get<OperateurService>(OperateurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
