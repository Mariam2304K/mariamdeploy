import { Test, TestingModule } from '@nestjs/testing';
import { MembreequipeController } from './membreequipe.controller';

describe('MembreequipeController', () => {
  let controller: MembreequipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MembreequipeController],
    }).compile();

    controller = module.get<MembreequipeController>(MembreequipeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
