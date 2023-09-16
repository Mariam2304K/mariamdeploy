import { Test, TestingModule } from '@nestjs/testing';
import { ImagesiteController } from './imagesite.controller';

describe('ImagesiteController', () => {
  let controller: ImagesiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagesiteController],
    }).compile();

    controller = module.get<ImagesiteController>(ImagesiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
