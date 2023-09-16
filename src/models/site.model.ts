import { Model, Column, Table, HasMany, ForeignKey, HasOne, BelongsTo } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';



@Table({ tableName: 'site' })
export class Site extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  typenv: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nomsite: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  situationgeo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  densite: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  typologie: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  station: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  localtec: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  plaqueident: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  datemiseservice: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  hauteurbatiment: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  latitude: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  longitude: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  altitude: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  vigile: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nbrevigile: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  societegardiennagevigile: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  typstation: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nom_region: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nom_ville_quartier: string;

  
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nom_departement: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nom_commune: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  observation: string;

    // @HasMany(() => Controlenv)
    // controlenvs: Controlenv[];



  //  @HasMany(() => Rapport)
  //  rapports: Rapport[];

    
  @ForeignKey(() => Rapport)
  @Column 
  id_rapport : number
  @BelongsTo(() => Rapport)
  rapport : Rapport;
}