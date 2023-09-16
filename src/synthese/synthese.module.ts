import { Module } from '@nestjs/common';
import { SyntheseService } from './services/synthese/synthese.service';
import { Synthese } from 'src/models/synthese.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { SyntheseController } from './controllers/synthese/synthese.controller';

@Module({

  imports : [SequelizeModule.forFeature([Synthese])],
  controllers : [SyntheseController],
  providers: [SyntheseService]
})
export class SyntheseModule {}
