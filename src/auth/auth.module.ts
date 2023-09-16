import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
//import { APP_GUARD } from '@nestjs/core';
import { AuthController } from './auth.controller';
import { UtilisateurModule } from 'src/utilisateur/utilisateur.module';
import { LocalStrategy } from './local.strategy';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { JwtModule} from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({

  imports: [
    UtilisateurModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' }, //durée de vie du token
    }),
  ], 
  providers: [
    AuthService,LocalStrategy,JwtStrategy

],
    controllers: [AuthController],
    exports: [AuthService],
 
})
export class AuthModule {}
