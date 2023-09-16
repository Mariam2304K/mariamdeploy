import { Body, Controller, Post } from '@nestjs/common';
import { EquipeService } from 'src/equipe/services/equipe/equipe.service';

@Controller('equipe')
export class EquipeController {

       
    constructor(private equ : EquipeService ){}


    @Post('equipe')

       async equipe(
  
              @Body('nomequipe') nomequipe: string){
    
                 console.log(nomequipe)

                 await this.equ.createEquipe(nomequipe)

               } 
}
