import { Controlenv } from 'src/models/controlenv.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';




@Table({ tableName: 'image' })
export class Image extends Model {
@Column({
  primaryKey: true,
  autoIncrement : true
})
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  image_site: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  description_site: string;

  //  @HasMany(() => Rapport)
  //  rapports: Rapport[];

    
  @ForeignKey(() => Rapport)
  @Column 
  id_rapport : number
  @BelongsTo(() => Rapport)
  rapport : Rapport;

}