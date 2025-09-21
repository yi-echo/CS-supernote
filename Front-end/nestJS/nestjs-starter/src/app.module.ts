import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/http-log.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: any) {
    // 全局中间件
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // 作用于所有路由
  }
}
