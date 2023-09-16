import { Image } from './models/image.model';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Controlenv } from 'src/models/controlenv.model';
import { Membreequipe } from 'src/models/membreequipe.model';
import { Operateur } from 'src/models/operateur.model';
import { Site } from 'src/models/site.model';
import { Synthese } from 'src/models/synthese.model';
import { Utilisateur } from 'src/models/utilisateur.model';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { MulterModule } from '@nestjs/platform-express/multer/multer.module';
import { ControlenvModule } from './controlenv/controlenv.module';
import { EquipeModule } from './equipe/equipe.module';
import { ImageModule } from './image/image.module';
import { MembreequipeModule } from './membreequipe/membreequipe.module';
import { OperateurModule } from './operateur/operateur.module';
import { SiteModule } from './site/site.module';
import { SyntheseModule } from './synthese/synthese.module';
import { RapportModule } from './rapport/rapport.module';
import { Rapport } from './models/rapport.model';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthModule } from './auth/auth.module';
import { Equipe } from './models/equipe.model';
import { ImagesiteModule } from './imagesite/imagesite.module';
import { ConclusionModule } from 'src/conclusion/conclusion.module';
import { Conclusion } from './models/conclusion.model';
import { AnnexeModule } from './annexe/annexe.module';
import { Annexe } from 'src/models/annexe.model';


@Module({
  imports: [
    PassportModule.register({defaultStrategy:'jwt'}),
    
    MulterModule.register({dest: './uploads'}),
    
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'P@stgree50_50',
      database: 'ijkl',
      autoLoadModels: true,
     synchronize : true,
      models:[
        Controlenv,
        Equipe,
        Membreequipe,
        Operateur,
        Site,
        Synthese ,
        Utilisateur,
        Image,
        Rapport,
        Conclusion,
        Annexe,
      ]
    }),
    
    UtilisateurModule,
    
    ControlenvModule,
    
    EquipeModule,
    
    ImageModule,
    
    MembreequipeModule,
    
    OperateurModule,
    
    SiteModule,
    
    SyntheseModule,
    
    RapportModule,
    
    AuthModule,
    
    ConclusionModule,
    
    ImagesiteModule,
    
    AnnexeModule
  
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
