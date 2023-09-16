import { Module } from '@nestjs/common';
import { ImagesiteController } from './controllers/imagesite.controller';
import { ImagesiteService } from './services/imagesite.service';

@Module({
  controllers: [ImagesiteController],
  providers: [ ImagesiteService]
})
export class ImagesiteModule {}
