import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rapport } from 'src/models/rapport.model';
import { RapportController } from './controllers/rapport/rapport.controller';
import { RapportService } from './services/rapport/rapport.service';

@Module({

    
    imports : [SequelizeModule.forFeature([Rapport])],
    controllers : [RapportController],
    providers : [RapportService]
})
export class RapportModule {}
