import { Test, TestingModule } from '@nestjs/testing';
import { ConclusionController } from './conclusion.controller';

describe('ConclusionController', () => {
  let controller: ConclusionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConclusionController],
    }).compile();

    controller = module.get<ConclusionController>(ConclusionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
