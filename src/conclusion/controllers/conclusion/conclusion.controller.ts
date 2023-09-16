import { Body, Controller, Post } from '@nestjs/common';
import { ConclusionService } from 'src/conclusion/services/conclusion/conclusion.service';

@Controller('conclusion')
export class ConclusionController {

    constructor(private conclusionServ : ConclusionService ){}

    @Post('register')

    async conclusionRegister(

           @Body('operateur') operateur: string,
           @Body('conformite') conformite: string,
           @Body('id_rapport') id_rapport: number,
           ){
 
              console.log(operateur, conformite, id_rapport);

              await this.conclusionServ.createConclusion(operateur, conformite, id_rapport)

            };


}
