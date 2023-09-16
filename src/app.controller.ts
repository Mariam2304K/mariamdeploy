import { AppService } from './app.service';
import { Controller, Request, Post, UseGuards } from '@nestjs/common';

@Controller('App')
export class AppController {
  authService: any;

  constructor(private readonly appService: AppService) {}

  getHello(): any {
    throw new Error('Method not implemented.');
  }

}
