import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Utilisateur } from 'src/models/utilisateur.model';
import { UtilisateurController } from './controllers/utilisateur/utilisateur.controller';
import { UtilisateurService } from './services/utilisateur/utilisateur.service';
// import { MulterModule } from '@nestjs/platform-express/multer/multer.module';


@Module({
    imports : [SequelizeModule.forFeature([Utilisateur]),
],
    controllers : [UtilisateurController],
    providers : [UtilisateurService],

exports:[UtilisateurService]
    

})
export class UtilisateurModule {}
