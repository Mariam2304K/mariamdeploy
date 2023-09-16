import { Module } from '@nestjs/common';
import { Operateur } from 'src/models/operateur.model';
import { OperateurController } from './controllers/operateur/operateur.controller';
import { OperateurService } from './services/operateur/operateur.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Operateur])],
    controllers : [OperateurController],
    providers : [OperateurService]
})
export class OperateurModule {}
