import { Annexe } from './../../../models/annexe.model';
import { Image } from './../../../models/image.model';
import { Synthese } from './../../../models/synthese.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Rapport } from 'src/models/rapport.model';
import { Membreequipe } from 'src/models/membreequipe.model';
import { Operateur } from 'src/models/operateur.model';
import { Site } from 'src/models/site.model';
import { Controlenv } from 'src/models/controlenv.model';
import { Conclusion } from 'src/models/conclusion.model';

@Injectable()
export class RapportService {

    //creer un rapport et renvoyer le ID
    async createRapport( id_utilisateur: number, statut: string, titre_rapport: string, nom_operateur:string) {

        const rap = new Rapport();
        rap.id_utilisateur= id_utilisateur,
        rap.statut= statut,
        rap.titre_rapport= titre_rapport,
        rap.nom_operateur= nom_operateur,
        // rap.logo_operateur= logo_operateur,

        console.log(rap);
        await rap.save();
        const dernierRapport = await Rapport.findOne({ order: [['createdAt', 'DESC']] });
        return dernierRapport ? dernierRapport.id : null;

         }
    //Mettre à jour un rapport
    async updateRapport( id:number,id_utilisateur: number, titre_rapport: string) {
      
      const rapport =  await Rapport.findOne({ where: { id } });
      if(rapport){
        rapport.id_utilisateur= id_utilisateur;
        rapport.titre_rapport= titre_rapport;
        return await rapport.save();  // On retourne le titre du rapport
         
      }else{
        throw NotFoundException; // on retourne un eeception pour dire qu'on a pas trouvé le rapport
      }
    }
// lister tous les rapport
async findAll(){
    const rapports = Rapport.findAll();
    console.log(rapports);
    return rapports ;
}
// Afficher un rapport à partir de son Id
async findOneById(id: number){
    // recherche dans les differentes tables
     const rapport =  Rapport.findOne({ where: { id } });
     const membreequipe =  Membreequipe.findAll({ where: { id_rapport : id } });
     const operateur =  Operateur.findAll({ where: { id_rapport : id } });
     const synthese =  Synthese.findAll({ where: { id_rapport : id } });
     const site =  Site.findAll({ where: { id_rapport : id } });
     const image =  Image.findAll({ where: { id_rapport : id } });
     const controlenv =  Controlenv.findAll({ where: { id_rapport : id } });
     const conclusion =  Conclusion.findAll({ where: { id_rapport : id } });
     const annexe =  Annexe.findAll({ where: { id_rapport : id } });

    // Combinaisons des resultats
    const RapportComplet: any[] = [];
    if (rapport) RapportComplet.push((await rapport).toJSON());
    if (membreequipe) RapportComplet.push((await membreequipe)); // A revoir .......
    if (operateur) RapportComplet.push((await operateur)); // A revoir .......
    if (synthese) RapportComplet.push((await synthese)); // A revoir .......
    if (site) RapportComplet.push((await site)); // A revoir .......
    if (image) RapportComplet.push((await image)); // A revoir .......
    if (controlenv) RapportComplet.push((await controlenv)); 
    if (conclusion) RapportComplet.push((await conclusion)); 
    if (annexe) RapportComplet.push((await annexe)); 

    // retrour des resultats combinés
    return RapportComplet
  }
async findUniqueById(id: number){
    // recherche dans les differentes tables
     const rapport =  await Rapport.findOne({ where: { id } });
     if(rapport){
       return rapport
     }else{
       throw  NotFoundException;
     }
  }

    // Compter les rapport 

    async countReport(){
        const nbrapportFini = await Rapport.count({ where: { statut : '1' } });
        const nbrapportNonFini = await Rapport.count({ where: { statut : '0' } });
        const rapportTotal: any= {};
        rapportTotal['nbrapportFini']=nbrapportFini;
        rapportTotal['nbrapportNonFini']=nbrapportNonFini;
        return rapportTotal;
      }
        
      //changer le statut du rapport quand il est terminé
      async FinishReport(id_rapport){
        const rapport = await Rapport.findOne(id_rapport);

        if (!rapport) {
          // Handle error, e.g., return a 404 response
          throw new Error(`Rapport with id ${id_rapport} not found`);
        }
    
        rapport.statut = '1';
        rapport.save();
        return rapport;
      
      }
}
