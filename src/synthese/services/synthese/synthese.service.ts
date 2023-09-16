import { Injectable } from '@nestjs/common';
import { Synthese } from 'src/models/synthese.model';

@Injectable()
export class SyntheseService {

    async createSynthese(partieconcernee: string, anormalies: string, recommandations: string, id_rapport: number) {

        const synt = new Synthese();
        synt.partieconcernee= partieconcernee;
        synt.anormalies= anormalies;
        synt.recommandations= recommandations;
        synt.id_rapport= id_rapport;

        console.log(synt);
        return await synt.save()


         }
}
