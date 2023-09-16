import { Membreequipe } from 'src/models/membreequipe.model';
import { Model, Column, Table, HasMany, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';
import { Equipe } from './equipe.model';
import { Site } from './site.model';
import { Operateur } from './operateur.model';
import { Controlenv } from './controlenv.model';
import { Image } from './image.model';
import { Synthese } from './synthese.model';
import { Utilisateur } from './utilisateur.model';


@Table({ tableName: 'rapport' })
export class Rapport extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  // @IsNotEmpty()
  // @IsString()
  // @Column({allowNull : true})
  // titre_rapport: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  titre_rapport: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  statut: string;

     @HasOne(() => Controlenv)
     controlenv: Controlenv[];

     @HasOne(() => Image)
     image: Image[];

     @HasMany(() => Membreequipe)
     membreequipes: Membreequipe[];

     @HasOne(() => Operateur)
     operateur: Operateur[];

     @HasOne(() => Site)
     site: Site[];

     @HasOne(() => Synthese)
     synthese: Synthese[];

     @ForeignKey(() => Utilisateur)
      @Column 
      id_utilisateur : number
      @BelongsTo(() => Utilisateur)
      utilisateur : Utilisateur;

      @IsNotEmpty()
      @IsString()
      @Column({allowNull : true})
      nom_operateur: string;
    
    
      @IsNotEmpty()
      @IsString()
      @Column({allowNull : true})
      logo_operateur: string;

    

  // @IsNotEmpty()
  // @IsString()
  // @Column({allowNull : true})
  // date_finition: Date;

  // @ForeignKey(() => Equipe)
  // @Column 
  // id_equipe : number
  // @BelongsTo(() => Equipe)
  // Equipe : Equipe;

  // @ForeignKey(() => Site)
  // @Column 
  // id_site : number
  // @BelongsTo(() => Site)
  // site : Site;

  // @ForeignKey(() => Operateur)
  // @Column 
  // id_operateur : number
  // @BelongsTo(() => Operateur)
  // operateur : Operateur;

  // @ForeignKey(() => Controlenv)
  // @Column 
  // id_controlenv : number
  // @BelongsTo(() => Controlenv)
  // controlenv : Controlenv;

  // @ForeignKey(() => Image)
  // @Column 
  // id_image: number
  // @BelongsTo(() => Image)
  // image : Image;

  // @ForeignKey(() => Synthese)
  // @Column 
  // id_synthese: number
  // @BelongsTo(() => Synthese)
  // synthese : Synthese;

}