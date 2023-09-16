import { UtilisateurService } from 'src/utilisateur/services/utilisateur/utilisateur.service';
import { BadRequestException, Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Express } from 'express'
import { extname } from 'path';
// import path, { extname } from 'path';
// import { Utilisateur } from 'src/models/utilisateur.model';
// import { error } from 'console';

@Controller('utilisateur')
export class UtilisateurController {

  constructor(private userServ: UtilisateurService) { }

  @Post('inscription')

   @UseInterceptors(
    FileInterceptor('image_users',
      {
        dest: './uploads',
        storage: diskStorage({

          destination: './uploads',

          filename: (req, file, callback) => {

            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

            const ext = extname(file.originalname);

            const filename = uniqueSuffix + file.originalname;
            callback(null, filename);

          },

        }),

      }),
  )
  // enregistrement des autres champs
  async uploadSingleFileWithPost(@UploadedFile() file, @Body() body) {
    const nom_user = body.nom_user;
    const prenom_user = body.prenom_user;
    const email = body.email;
    const contact = body.contact;
    const profession = body.profession;
    const nom_utilisateur = body.nom_utilisateur;
    const mdp = body.mdp;
    const profile = body.profile;
    const image_users = file.filename;
    // affichage des elements de test
    console.log(mdp, email, profile, nom_user, image_users)
    // enregistrement des informations de l'utilisateur
    await this.userServ.createUser(nom_user, prenom_user, email, contact, profession,
      nom_utilisateur, mdp, profile, image_users)

  }

  // retrouver la photo d'un utilisateur
  @Get('profile-image/:imageName')
  display(@Param('imageName') imagename,@Res() res){
      res.sendFile(imagename,{ root: './uploads' })
  }

  // afficher la liste des utilisateurs

  @Get('listuser')
  findAll() {
    return this.userServ.findAll();
  }
  // compter les utilisateurs
  @Get('stat/count')
  async countUsers(){
     const nombre_utilisateur = this.userServ.countUsers();
     return nombre_utilisateur
  }
 










  // ancien code d'enregistrement

   //  async inscription(

  //   // lienphoto:any,

  //    @Body('nom_user') nom_user: string,
  //    @Body('prenom_user') prenom_user : string,
  //    @Body('email') email: string,
  //    @Body('contact') contact: number,
  //    @Body('profession') profession: string, 
  //    @Body('nom_utilisateur') nom_utilisateur: string,
  //    @Body('mdp') mdp: string,  
  //    @Body('profile') profile: string,
  //    @Body('image_users') image_users: string){

  //     console.log(mdp,email,profile,nom_user, image_users)


  //     await this.userServ.createUser(nom_user, prenom_user , email, contact, profession, 
  //       nom_utilisateur, mdp, profile, image_users)

  //     }




}
