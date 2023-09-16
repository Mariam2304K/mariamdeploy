import { Membreequipe } from 'src/models/membreequipe.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
import { Rapport } from './rapport.model';



@Table({ tableName: 'utilisateur' })
export class Utilisateur extends Model {

  @Column({
   
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nom_user: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  prenom_user: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Column({unique : true, allowNull: true})
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  @Column({allowNull: true})
  contact: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull: true})
  profession: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull: true})
  nom_utilisateur: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(10)
  @Column({unique : true, allowNull: true})
  mdp: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  profile: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  image_users: string;

  // @HasOne(() => Membreequipe)
  // membreequipe: Membreequipe[];

  @HasMany(() => Rapport)
  rapports: Rapport[];

      
  


}