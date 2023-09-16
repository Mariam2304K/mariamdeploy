import { Body, Controller, Post } from '@nestjs/common';
import { SyntheseService } from 'src/synthese/services/synthese/synthese.service';

@Controller('synthese')
export class SyntheseController {

        
    constructor(private synthe : SyntheseService ){}


    @Post('synthese')

       async synthese(
  
              @Body('partieconcernee') partieconcernee: string,
              @Body('anormalies') anormalies: string,
              @Body('recommandations') recommandations: string,
              @Body('id_rapport') id_rapport: number){
    
                 console.log(partieconcernee, anormalies, recommandations, id_rapport)

                 await this.synthe.createSynthese(partieconcernee, anormalies, recommandations, id_rapport)

               }
}
