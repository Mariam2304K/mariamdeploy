import { Module } from '@nestjs/common';
import { Conclusion } from 'src/models/conclusion.model';
import { ConclusionController } from './controllers/conclusion/conclusion.controller';
import { ConclusionService } from './services/conclusion/conclusion.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Conclusion])],
    controllers : [ConclusionController],
    providers : [ConclusionService]
})
export class ConclusionModule {}
