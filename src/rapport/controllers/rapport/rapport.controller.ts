import { Body, Controller, Post , Get, Param, ParseIntPipe, Res} from '@nestjs/common';
import { RapportService } from 'src/rapport/services/rapport/rapport.service';

@Controller('rapport')
export class RapportController {

    
    constructor(private rapp : RapportService ){}


    @Post('Creerrapport')

       async rapport(
  
              @Body('statut') statut: string,
              @Body('titre_rapport') titre_rapport: string,
              @Body('id_utilisateur') id_utilisateur: number,
              @Body('nom_operateur') nom_operateur: string){
              // @Body('logo_operateur') logo_operateur: number){
    
                 console.log( statut, id_utilisateur)

                 return await this.rapp.createRapport( id_utilisateur, statut, titre_rapport, nom_operateur )

               }

@Post('updaterapport')

    async updaterapport(

          @Body('id_rapport') id_rapport: number,
          @Body('titre_rapport') titre_rapport: string,
          @Body('id_utilisateur') id_utilisateur: number){

              return await this.rapp.updateRapport(id_rapport,id_utilisateur, titre_rapport )

            }
   // afficher la liste des rapports

  @Get('listrapport')
  findAll() {
    return this.rapp.findAll();
  }

   // retrouver un rapport par son ID
   @Get(':id')
   async findOneById(@Param('id', ParseIntPipe) id: number) {
     return this.rapp.findOneById(id);
   }
   // retrouver un unique rapport par son ID
   @Get('unique/:id')
   async findUniqueById(@Param('id', ParseIntPipe) id: number) {
     return this.rapp.findUniqueById(id);
   }

     // compter les rapport
  @Get('stat/count')
  async countReport(){
     const nombre_rapport = this.rapp.countReport();
     return nombre_rapport
  }

  @Get('image-site/:imageName')
  display(@Param('imageName') imagename,@Res() res){
      res.sendFile(imagename,{ root: './uploads' })
  }

  @Get('plansite/:imageName')
  display_z(@Param('imageName') imagename,@Res() res){
      res.sendFile(imagename,{ root: './uploads' })
  }
}
