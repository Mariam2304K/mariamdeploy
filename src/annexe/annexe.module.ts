import { Module } from '@nestjs/common';
import { AnnexeController } from './controllers/annexe/annexe.controller';
import { AnnexeService } from './services/annexe/annexe.service';
import { Annexe } from 'src/models/annexe.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { RapportService } from 'src/rapport/services/rapport/rapport.service';

@Module({

    imports : [SequelizeModule.forFeature([Annexe])],
    controllers : [AnnexeController],
    providers : [AnnexeService, RapportService]
})
export class AnnexeModule {}
