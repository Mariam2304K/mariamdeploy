import { BadRequestException, Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ImagesService } from 'src/image/services/images/images.service';
import { UtilisateurService } from 'src/utilisateur/services/utilisateur/utilisateur.service';
import { Express } from 'express'

@Controller('image')
export class ImageController {


constructor(private siteServ: ImagesService) { }


@Post('site/image')
@UseInterceptors(
  FileInterceptor('image_site',
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
  const description_site = body.description_site;
  const id_rapport = body.id_rapport;
  const image_site = file.filename;
  // affichage des elements de test
  console.log(image_site, description_site, id_rapport)
  // enregistrement des informations de l'utilisateur
  await this.siteServ.createImgSite(image_site, description_site, id_rapport)

}







}
