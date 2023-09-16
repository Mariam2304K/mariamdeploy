import { Model, Column, Table, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';




@Table({ tableName: 'operateur' })
export class Operateur extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nomoperateur: string;


  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  logoperateur: string;
 
  //  @HasMany(() => Rapport)
  //  rapports : Rapport[]

    
  @ForeignKey(() => Rapport)
  @Column 
  id_rapport : number
  @BelongsTo(() => Rapport)
  rapport : Rapport;
}