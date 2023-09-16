import { Utilisateur } from 'src/models/utilisateur.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Equipe } from './equipe.model';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';



@Table({ tableName: 'membreequipe' })
export class Membreequipe extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nom: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  prenom: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  fonction: string;

@ForeignKey(() => Equipe)
@Column
 id_equipe:number;
 @BelongsTo(() => Equipe)
 equipe: Equipe;

   
 @ForeignKey(() => Rapport)
 @Column 
  id_rapport : number
  @BelongsTo(() => Rapport)
  rapport : Rapport;

}