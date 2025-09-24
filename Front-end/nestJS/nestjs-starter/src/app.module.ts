import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/http-log.middleware';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
// import { configuration } from './configuration';
import * as dotenv from 'dotenv';
import * as joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 全局配置
      // envFilePath: '.env.development', // 指定环境变量文件路径
      load: [() => dotenv.config({ path: '.env' })], // 预加载配置
      // load: [configuration],
      validationSchema: joi.object({
        NODE_ENV: joi
          .string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        DATABASE_PORT: joi.number().default(3000),
        DATABASE_HOST: joi.string().required(),
        DATABASE_USERNAME: joi.string().required(),
        DATABASE_PASSWORD: joi.string().required(),
        DATABASE_NAME: joi.string().required(),
      }),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: any) {
    // 全局中间件
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    consumer.apply(LoggerMiddleware).forRoutes('*'); // 作用于所有路由
  }
}
