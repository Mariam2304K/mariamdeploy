import { Membreequipe } from 'src/models/membreequipe.model';
import { Model, Column, Table, HasMany, ForeignKey, BelongsTo,HasOne } from 'sequelize-typescript';
import { Controlenv } from './controlenv.model';
import { Rapport } from './rapport.model';
import { IsNotEmpty, IsString } from 'class-validator';





@Table({ tableName: 'equipe' })
export class Equipe extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;


  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nomequipe: string;

  @HasMany(() => Membreequipe)
  membreequipes : Membreequipe[];

  // @HasMany(() => Rapport)
  // rapports: Rapport[];


  // @HasOne (() => Controlenv)
  // controlenv : Controlenv;

    
  // @ForeignKey(() => Rapport)
  // @Column 
  // id_rapport : number
  // @BelongsTo(() => Rapport)
  // rapport : Rapport;


}