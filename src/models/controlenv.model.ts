import { Synthese } from 'src/models/synthese.model';
import { Site } from 'src/models/site.model';
import { Model, Column, Table, BelongsTo, ForeignKey , HasOne, HasMany } from 'sequelize-typescript';
import { Equipe } from './equipe.model';
import { Image } from './image.model';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';





@Table({ tableName: 'controlenv' })
export class Controlenv extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true,
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  cheminaccess: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_portail: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_portail: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  type_portail: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_serrure: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_serrure: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  telemetrie: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_cloture: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_cloture: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  type_cloture: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_plaquesignal: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_plaquesignal: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_etancheitesite: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_etancheitesite: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_etancheitemassif: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_etancheitemassif: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_garde_corps: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_garde_corps: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  hauteurterrasse: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatterrasse: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  revetement_espace: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_proximite_emprise: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nom_emprise: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  precision_emprise: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  distancesite_emprise: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presencesysteme_evacuation: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatsysteme_evacuation: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatlocal: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  typelocal: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatboulonnerie: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatassessoire: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presencesysteme_verrouillage: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatsysteme_verrouillage: string;

  
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_extincteur: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  validite: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nbre_extincteur: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presenceclim: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatclim: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nbreclim: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  typeclim: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etancheiteconnexion: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  condenseur: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  tuyauterieclim: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_grille: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_grille: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  observation: string;


  // @ForeignKey(() => Equipe)
  // @Column
  //  id_equipe : number;
  //  @BelongsTo(() => Equipe)
  //  equipe: Equipe;

  //  @ForeignKey(() => Controlenv)
  //  @Column
  //   id_site : number;
  //   @BelongsTo(() => Site)
  //   site: Site;

  //  @HasOne(() => Synthese)
  //  synthese : Synthese

     
  @ForeignKey(() => Rapport)
  @Column 
  id_rapport : number
  @BelongsTo(() => Rapport)
  rapport : Rapport;

   
  //  @HasMany(() => Rapport)
  //  rapports: Rapport[];


}



