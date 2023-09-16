import { Body, Controller, Post } from '@nestjs/common';
import { ControlenvService } from 'src/controlenv/services/controlenv/controlenv.service';

@Controller('controlenv')
export class ControlenvController {

    
    constructor(private control : ControlenvService ){}


    @Post('controle')

      async controle(
  
             @Body('cheminaccess') cheminaccess: string, 
             @Body('presenceclim') presenceclim: string,
             @Body('etatclim') etatclim: string,
             @Body('nbreclim') nbreclim: number,
             @Body('typeclim') typeclim: string,
             @Body('etancheiteconnexion') etancheiteconnexion: string,
             @Body('condenseur') condenseur: string,
             @Body('tuyauterieclim') tuyauterieclim: string,
             @Body('presence_cloture') presence_cloture: string,
             @Body('etat_cloture') etat_cloture: string,
             @Body('type_cloture') type_cloture: string,
             @Body('presence_proximite_emprise') presence_proximite_emprise: string,
             @Body('nom_emprise') nom_emprise: string,
             @Body('precision_emprise') precision_emprise: string,
             @Body('distancesite_emprise') distancesite_emprise: number,
             @Body('presence_etancheitemassif') presence_etancheitemassif: string,
             @Body('etat_etancheitemassif') etat_etancheitemassif: string,
             @Body('presencet_etancheitesite') presencet_etancheitesite: string,
             @Body('etat_etancheitesite') etat_etancheitesite: string,
             @Body('presencesysteme_evacuation') presencesysteme_evacuation: string,
             @Body('etatsysteme_evacuation') etatsysteme_evacuation: string,
             @Body('presence_extincteur') presence_extincteur: string,
             @Body('validite') validite: string,
             @Body('nbre_extincteur') nbre_extincteur: number,
             @Body('presence_garde_corps') presence_garde_corps: string,
             @Body('etat_garde_corps') etat_garde_corps: string,
             @Body('presence_grille') presence_grille: string,
             @Body('etat_grille') etat_grille: string,
             @Body('observation') observation: string,
             @Body('etatlocal') etatlocal: string,
             @Body('typelocal') typelocal: string,
             @Body('etatboulonnerie') etatboulonnerie: string,
             @Body('etatassessoire') etatassessoire: string,
             @Body('presence_plaquesignal') presence_plaquesignal: string,
             @Body('etat_plaquesignal') etat_plaquesignal: string,
             @Body('presence_portail') presence_portail:string,
             @Body('etat_portail') etat_portail: string,
             @Body('type_portail') type_portail: string,
             @Body('presence_serrure') presence_serrure: string,
             @Body('etat_serrure') etat_serrure: string,
             @Body('telemetrie') telemetrie: string,
             @Body('presencesysteme_verrouillage') presencesysteme_verrouillage: string,
             @Body('etatsysteme_verrouillage') etatsysteme_verrouillage: string,
             @Body('hauteurterrasse') hauteurterrasse: string,
             @Body('etatterrasse') etatterrasse: string,
             @Body('revetement_espace') revetement_espace: string,
            //@Body('id_site') id_site: number,
             @Body('id_rapport') id_rapport: number){
    
                console.log(cheminaccess, presenceclim, etatclim, nbreclim, typeclim, etancheiteconnexion, condenseur, tuyauterieclim,
                 presence_cloture, etat_cloture, type_cloture, presence_proximite_emprise, nom_emprise, precision_emprise, distancesite_emprise,
                 presence_etancheitemassif, etat_etancheitemassif, presencet_etancheitesite, etat_etancheitesite, presencesysteme_evacuation, etatsysteme_evacuation,
                 presence_extincteur, validite, nbre_extincteur, presence_garde_corps, etat_garde_corps, presence_grille, etat_grille, observation, etatlocal,
                 typelocal, etatboulonnerie, etatassessoire, presence_plaquesignal, etat_plaquesignal, presence_portail, etat_portail, type_portail,
                 presence_serrure, etat_serrure, telemetrie, presencesysteme_verrouillage, etatsysteme_verrouillage, hauteurterrasse, etatterrasse, revetement_espace,
                  id_rapport )

                await this.control.createControl(cheminaccess, presenceclim, etatclim, nbreclim, typeclim, etancheiteconnexion, condenseur, tuyauterieclim,
                 presence_cloture, etat_cloture, type_cloture, presence_proximite_emprise, nom_emprise, precision_emprise, distancesite_emprise,
                 presence_etancheitemassif, etat_etancheitemassif, presencet_etancheitesite, etat_etancheitesite, presencesysteme_evacuation, etatsysteme_evacuation,
                 presence_extincteur, validite, nbre_extincteur, presence_garde_corps, etat_garde_corps, presence_grille, etat_grille, observation, etatlocal,
                 typelocal, etatboulonnerie, etatassessoire, presence_plaquesignal, etat_plaquesignal, presence_portail, etat_portail, type_portail, presence_serrure, etat_serrure,
                 telemetrie, presencesysteme_verrouillage, etatsysteme_verrouillage, hauteurterrasse, etatterrasse, revetement_espace, id_rapport)

              } 

}
