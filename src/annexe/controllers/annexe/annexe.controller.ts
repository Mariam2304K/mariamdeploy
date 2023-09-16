import { BadRequestException, Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AnnexeService } from 'src/annexe/services/annexe/annexe.service';
import { RapportService } from 'src/rapport/services/rapport/rapport.service';
import { Express } from 'express'


@Controller('annexe')
export class AnnexeController {
    constructor(private annexeServ: AnnexeService, private rapp: RapportService) { }

    @Post('image')
    @UseInterceptors(
      FileInterceptor('image_annexe',
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
      const id_rapport = body.id_rapport;
      const image_annexe =  file.filename;
      // affichage des elements de test
      console.log(image_annexe, id_rapport)
      // enregistrement des informations de l'utilisateur
      await this.annexeServ.createAnnexeImg(image_annexe, id_rapport)

      await this.rapp.FinishReport(id_rapport)
    
    }

}
