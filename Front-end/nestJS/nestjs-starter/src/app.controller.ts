import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHello(): any {
    const port = this.configService.get<string>('db');
    console.log('App is running on port:', port);
    return this.appService.getHello();
  }

  @Get('info')
  getInfo(): any {
    // 控制器 只负责请求处理转发，不负责具体业务逻辑
    return this.appService.getInfo();
  }
}
