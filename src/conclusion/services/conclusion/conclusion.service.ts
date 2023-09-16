import { Injectable } from '@nestjs/common';
import { Conclusion } from 'src/models/conclusion.model';

@Injectable()
export class ConclusionService {

    async createConclusion( operateur: string, conformite: string, id_rapport: number) {

        const conclus = new Conclusion();
        conclus.operateur= operateur;
        conclus.conformite= conformite;
        conclus.id_rapport= id_rapport;

        console.log(conclus);
        return await conclus.save()


         }

}
