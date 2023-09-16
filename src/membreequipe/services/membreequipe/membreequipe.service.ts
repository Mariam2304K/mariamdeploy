import { Injectable, NotFoundException } from '@nestjs/common';
import { Membreequipe } from 'src/models/membreequipe.model';

@Injectable()
export class MembreequipeService {

    // Creer un membre d'equipe
    async createMembre( nom: string, prenom: string, fonction: string, id_equipe: number, id_rapport: number) {

        const mbreq = new Membreequipe();
        mbreq.nom= nom;
        mbreq.prenom= prenom;
        mbreq.fonction= fonction;
        mbreq.id_equipe= id_equipe;
        mbreq.id_rapport= id_rapport;
        console.log(mbreq);
        return await mbreq.save()


    }
    // Mettre a jour les membres d'equipe
    async updateMembreEquipe( nom: string, prenom: string, fonction: string, id_rapport: number,id_membre: number, ) {

        const mbreq = await Membreequipe.findOne({ where: {id_rapport: id_rapport, id: id_membre}});
        if(mbreq){
            mbreq.nom= nom;
            mbreq.prenom= prenom;
            mbreq.fonction= fonction;
            console.log('modificatioon reussion')
            console.log(mbreq)
            return await mbreq.save();

        }else{
            throw NotFoundException;
        }

    }
    // retrouver tous les membres d'equipe
    async AllMembreToUpdate(id_rapport: number) {

        const mbreq = await Membreequipe.findAll({ where: {id_rapport: id_rapport}});
        if(mbreq){
           
            return mbreq;

        }else{
            throw NotFoundException;
        }

    }
}
