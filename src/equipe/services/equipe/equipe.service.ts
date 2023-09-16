import { Injectable } from '@nestjs/common';
import { Equipe } from 'src/models/equipe.model';

@Injectable()
export class EquipeService {
    async createEquipe( nomequipe: string) {

        const equip = new Equipe();
        equip.nomequipe= nomequipe,

        console.log(equip);
        return await equip.save()


    }
}
