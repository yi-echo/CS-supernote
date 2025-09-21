import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('info')
  getInfo(){
    // 控制器 只负责请求处理转发，不负责具体业务逻辑
    return {
      name: "nestjs-starter",
      version: "1.0.0",
      description: "A starter template for NestJS applications",
    }
  }
}
