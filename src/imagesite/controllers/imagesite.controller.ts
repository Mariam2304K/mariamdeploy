import { BadRequestException, Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ImagesiteService } from 'src/imagesite/services/imagesite.service';
import { UtilisateurService } from 'src/utilisateur/services/utilisateur/utilisateur.service';
import { Express } from 'express'

@Controller('imagesite')
export class ImagesiteController {

    
constructor(private siteServ: ImagesiteService) { }


@Post('image')
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
  const description_image = body.description_image;
  const id_rapport = body.id_rapport;
  console.log(description_image, id_rapport)
  const image_site =  file.filename;
  // affichage des elements de test
  console.log(image_site, description_image, id_rapport)
  // enregistrement des informations de l'utilisateur
  await this.siteServ.createImgSite(image_site, description_image, id_rapport)

}

@Post('image/update')
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
async updateSingleFileWithPost(@UploadedFile() file, @Body() body) {
  const description_image = body.description_image;
  const id_rapport = body.id_rapport;
  const id_image = body.id_image;
  const image_site =  file.filename;
  // enregistrement des informations
  await this.siteServ.updateImgSite(image_site, description_image, id_rapport,id_image)

}

//retrouver toutes les images associées à un rappo  rt

@Get('image/update/:id_rapport')

  async findImgSite(@Param('id_rapport') id_rapport){

      const images= await this.siteServ.findImgSite(id_rapport);
      return images;
  };
// retrouver la photo unique
  @Get('image/update/oldname/:imageName')
  findImageByName(@Param('imageName') imagename,@Res() res){
      res.sendFile(imagename,{ root: './uploads' })
  }

}
