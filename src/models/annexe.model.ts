import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';


@Table({ tableName: 'annexe' })
export class Annexe extends Model {
@Column({
  primaryKey: true,
  autoIncrement : true
})
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  image_annexe: string;
    
  @ForeignKey(() => Rapport)
  @Column 
  id_rapport : number
  @BelongsTo(() => Rapport)
  rapport : Rapport;

}