import { Injectable } from '@nestjs/common';
import { Controlenv } from 'src/models/controlenv.model';

@Injectable()
export class ControlenvService {

    async createControl( cheminaccess: string, presenceclim: string, etatclim: string, nbreclim: number, typeclim: string, etancheiteconnexion: string, condenseur : string, tuyauterieclim : string,
        presence_cloture: string, etat_cloture: string, type_cloture: string, presence_proximite_emprise: string, nom_emprise: string, precision_emprise: string,  distancesite_emprise: number,
        presence_etancheitemassif: string, etat_etancheitemassif: string, presence_etancheitesite: string, etat_etancheitesite: string, presencesysteme_evacuation: string, etatsysteme_evacuation: string,
        presence_extincteur: string, validite: string, nbre_extincteur:number, presence_garde_corps: string, etat_garde_corps: string, presence_grille: string, etat_grille_protec: string, observation: string,
        etatlocal: string, typelocal: string, etatboulonnerie: string, etatassessoire : string, presence_plaquesignal: string, etat_plaquesignal: string, presence_portail: string, etat_portail: string, type_portail: string,
        presence_serrure: string, etat_serrure: string, telemetrie: string, presencesysteme_verrouillage: string, etatsysteme_verrouillage: string, hauteurterrasse: string, etatterrasse: string, revetement_espace: string,
        id_rapport:number) {

        const cont = new Controlenv();
        cont.cheminaccess= cheminaccess;
        cont.presenceclim= presenceclim;
        cont.etatclim= etatclim;
        cont.nbreclim= nbreclim;
        cont.typeclim= typeclim;
        cont.etancheiteconnexion= etancheiteconnexion;
        cont.condenseur= condenseur;
        cont.tuyauterieclim= tuyauterieclim;
        cont.presence_cloture= presence_cloture;
        cont.etat_cloture= etat_cloture;
        cont.type_cloture= type_cloture;
        cont.presence_proximite_emprise= presence_proximite_emprise;
        cont.nom_emprise= nom_emprise;
        cont.precision_emprise= precision_emprise;
        cont.distancesite_emprise= distancesite_emprise;
        cont.presence_etancheitemassif= presence_etancheitemassif,
        cont.etat_etancheitemassif= etat_etancheitemassif,
        cont.presence_etancheitesite= presence_etancheitesite,
        cont.etat_etancheitesite= etat_etancheitesite,
        cont.presencesysteme_evacuation= presencesysteme_evacuation,
        cont.etatsysteme_evacuation= etatsysteme_evacuation,
        cont.presence_extincteur= presence_extincteur,
        cont.validite= validite,
        cont.nbre_extincteur= nbre_extincteur,
        cont.presence_garde_corps= presence_garde_corps,
        cont.etat_garde_corps= etat_garde_corps,
        cont.presence_grille= presence_grille,
        cont.etat_grille= etat_grille_protec,
        cont.observation= observation,
        cont.etatlocal= etatlocal;
        cont.typelocal= typelocal;
        cont.etatboulonnerie= etatboulonnerie;
        cont.etatassessoire= etatassessoire;
        cont.presence_plaquesignal= presence_plaquesignal,
        cont.etat_plaquesignal= etat_plaquesignal,
        cont.presence_portail= presence_portail;
        cont.etat_portail= etat_portail;
        cont.type_portail= type_portail;
        cont.presence_serrure= presence_serrure;
        cont.etat_serrure= etat_serrure;
        cont.telemetrie= telemetrie;
        cont.presencesysteme_verrouillage= presencesysteme_verrouillage,
        cont.etatsysteme_verrouillage= etatsysteme_verrouillage,
        cont.hauteurterrasse= hauteurterrasse;
        cont.etatterrasse= etatterrasse;
        cont.revetement_espace= revetement_espace;
        // cont.id_site= id_site;
        cont.id_rapport= id_rapport;

        console.log(cont);
        return await cont.save()


         }
}
