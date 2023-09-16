import { Module } from '@nestjs/common';
import { Site } from 'src/models/site.model';
import { SiteService } from './services/site/site.service';
import { SiteController } from './controllers/site/site.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    
    imports : [SequelizeModule.forFeature([Site])],
    controllers : [SiteController],
    providers : [SiteService]
})
export class SiteModule {}
