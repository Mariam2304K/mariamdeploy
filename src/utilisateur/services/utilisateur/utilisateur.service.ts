import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt'
import { Utilisateur } from 'src/models/utilisateur.model';

export type User = any;

@Injectable()
export class UtilisateurService {

    async findByUsername(nom_utilisateur: string): Promise<User | null> {
      return Utilisateur.findOne({
        where: { nom_utilisateur },
      });
    }

  async createUser(nom: string, prenom : string, email: string, contact: number, profession: string, 
    nomutilisateur: string, mdp: string, profile: string, image_users: string) { 
     
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(mdp, salt);
    
    const newUser = new Utilisateur();
     newUser.nom_user= nom;
     newUser.prenom_user=prenom;
     newUser.email=email;
     newUser.contact=contact;
     newUser.profession=profession;
     newUser.nom_utilisateur=nomutilisateur;
     newUser.mdp= hashed;
     newUser.profile=profile;
     newUser.image_users=image_users;
 

     console.log(newUser)
    return await newUser.save()
  }


  // lister tous les utilisateurs
  findAll(){
    const user = Utilisateur.findAll();
    console.log(user);
    return user ;

  }

  // Compter les utilisateurs 

  countUsers(){
    const nbUser = Utilisateur.count();
    return nbUser;
  }
}
