import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return JSON.stringify('Bonjour tout le monde');
  }


}
