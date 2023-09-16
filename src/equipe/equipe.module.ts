import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Equipe } from 'src/models/equipe.model';
import { EquipeController } from './controllers/equipe/equipe.controller';
import { EquipeService } from './services/equipe/equipe.service';

@Module({

    imports : [SequelizeModule.forFeature([Equipe])],
    controllers : [EquipeController],
    providers : [EquipeService]
})
export class EquipeModule {}
