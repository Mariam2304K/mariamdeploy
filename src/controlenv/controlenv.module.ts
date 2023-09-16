import { Module } from '@nestjs/common';
import { Controlenv } from 'src/models/controlenv.model';
import { ControlenvController } from './controllers/controlenv/controlenv.controller';
import { ControlenvService } from './services/controlenv/controlenv.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Controlenv])],
    controllers : [ControlenvController],
    providers : [ControlenvService]
})
export class ControlenvModule {}
