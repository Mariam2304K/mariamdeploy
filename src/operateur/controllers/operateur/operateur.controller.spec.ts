import { Test, TestingModule } from '@nestjs/testing';
import { OperateurController } from './operateur.controller';

describe('OperateurController', () => {
  let controller: OperateurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperateurController],
    }).compile();

    controller = module.get<OperateurController>(OperateurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
