import { Test, TestingModule } from '@nestjs/testing';
import { ControlenvController } from './controlenv.controller';

describe('ControlenvController', () => {
  let controller: ControlenvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControlenvController],
    }).compile();

    controller = module.get<ControlenvController>(ControlenvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
