import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getInfo() {
    return {
      name: 'nestjs-starter',
      version: '2.0.0',
      description: 'A starter template for NestJS applications',
    };
  }
}
