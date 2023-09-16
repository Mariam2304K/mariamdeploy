import { Test, TestingModule } from '@nestjs/testing';
import { SyntheseController } from './synthese.controller';

describe('SyntheseController', () => {
  let controller: SyntheseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SyntheseController],
    }).compile();

    controller = module.get<SyntheseController>(SyntheseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
