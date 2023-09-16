import {  BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { UtilisateurService } from 'src/utilisateur/services/utilisateur/utilisateur.service';
import * as bcrypt from 'bcrypt'
import { Utilisateur } from 'src/models/utilisateur.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

   constructor(
     private usersService: UtilisateurService,
    private jwtService: JwtService
     ) {}

   async VerificationUtilisateur(username: string, mdp: string): Promise<Utilisateur| undefined> {
    const user = await this.usersService.findByUsername(username);
     if(!user){ //verification si l'utilisateur est trouvé
      throw new BadRequestException()
    }
     if (bcrypt.compareSync(mdp.toString(), user.mdp)) { //verifier le mot de passe si le user est trouvé
       return user; //retourner l'utilisateur
     }

     throw new UnauthorizedException(); //si rien n'est trouvé lever une exception
     ;
   }
// implementation de jwt

async login(user: any) {
  const payload = {user};
  // console.log(user.id)
  return {
    access_token: this.jwtService.sign(payload),
  };
}









  // ancien 
    // constructor(private readonly usersService: UtilisateurService, private readonly jwtService: JwtService) {}
    // async signIn(nom_utilisateur, mdp) {
    //   console.log("dans sign")
    //     const user = await this.usersService.findOne(nom_utilisateur);
    //     if (user?.mdp !== mdp) {
    //       console.log("hello auth service ")
    //       throw new UnauthorizedException();
    //     }

    //     const payload = { sub: user.id, nom_utilisateur: user.nom_utilisateur };
    //     return {
    //       access_token: await this.jwtService.signAsync(payload),
    //     };
    // }
    
}
