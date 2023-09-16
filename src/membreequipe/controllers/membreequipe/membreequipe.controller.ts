import { Body, Controller, Post , Get, Param} from '@nestjs/common';
import { MembreequipeService } from 'src/membreequipe/services/membreequipe/membreequipe.service';

@Controller('membreequipe')
export class MembreequipeController {

    constructor(private membree : MembreequipeService ){}


   @Post('membreequipe')

      async membreequipe(
  
         @Body('nom') nom: string,
         @Body('prenom') prenom: string,
         @Body('fonction') fonction: string,
         @Body('id_equipe') id_equipe: number,
         @Body('id_rapport') id_rapport: number){

            console.log(nom, prenom, fonction, id_equipe, id_rapport)

            await this.membree.createMembre(nom, prenom, fonction, id_equipe, id_rapport)

      } 
   @Post('updatemembre')

      async updateMembreEquipe(
  
         @Body('nom') nom: string,
         @Body('prenom') prenom: string,
         @Body('fonction') fonction: string,
         @Body('id_membre') id_membre: number,
         @Body('id_rapport') id_rapport: number){

            console.log(nom, prenom, fonction, id_membre, id_rapport)
            await this.membree.updateMembreEquipe(nom, prenom, fonction, id_rapport, id_membre)

      } 
   @Get('updatemembre/:id_rapport')

      async AllMembreToUpdate(@Param('id_rapport') id_rapport){
  
           const Membres= await this.membree.AllMembreToUpdate(id_rapport);
           return Membres;
      }
      
}
