import { Module } from '@nestjs/common';
import { Membreequipe } from 'src/models/membreequipe.model';
import { MembreequipeController } from './controllers/membreequipe/membreequipe.controller';
import { MembreequipeService } from './services/membreequipe/membreequipe.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Membreequipe])],
    controllers : [MembreequipeController],
    providers : [MembreequipeService]
})
export class MembreequipeModule {}
