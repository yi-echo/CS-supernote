import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/http-log.middleware';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true, // 全局配置
    envFilePath: '.env', // 指定环境变量文件路径
  }),UserModule],
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
