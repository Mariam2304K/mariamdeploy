import { Test, TestingModule } from '@nestjs/testing';
import { AnnexeController } from './annexe.controller';

describe('AnnexeController', () => {
  let controller: AnnexeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnexeController],
    }).compile();

    controller = module.get<AnnexeController>(AnnexeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
