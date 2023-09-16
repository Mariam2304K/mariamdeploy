import { Test, TestingModule } from '@nestjs/testing';
import { ImagesiteService } from './imagesite.service';

describe('ImagesiteService', () => {
  let service: ImagesiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagesiteService],
    }).compile();

    service = module.get<ImagesiteService>(ImagesiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
