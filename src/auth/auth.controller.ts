import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
// import { localAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService,) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // async login(@Body() body) {
  //   const user = this.authService.VerificationUtilisateur(body.email, body.mdp)
  //   return user;
  // }

  @UseGuards(JwtAuthGuard)
  @Get('welcome')
  getProfile(@Request() req) {
    return req.user.user;
  }
}