import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/http-log.middleware';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { configuration } from './configuration';
import * as dotenv from 'dotenv';
import * as joi from 'joi';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigEnum } from './enum/config.enum';
import { User } from './user/user.entites';
import { Profile } from './user/profiles.entites';
import { Logs } from './logs/logs.entites';
import { Roles } from './roles/roles.entites';
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
        DB_SYNCHRONIZE: joi.boolean().default(false),
      }),
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: process.env.DATABASE_HOST,
    //   port: parseInt(process.env.DATABASE_PORT as string, 10) || 3306,
    //   username: process.env.DATABASE_USERNAME,
    //   password: process.env.DATABASE_PASSWORD,
    //   database: process.env.DATABASE_NAME,
    //   entities: [], // 实体类
    //   autoLoadEntities: true, // 自动加载实体
    //   synchronize: true, // 是否自动同步实体到数据库，初始化的时候，生产环境建议关闭
    //   logging: ['error'], // 是否打印日志
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          type: configService.get(ConfigEnum.DATABASE_TYPE),
          host: configService.get<string>(ConfigEnum.DATABASE_HOST),
          port: configService.get<number>(ConfigEnum.DATABASE_PORT || 3307),
          username: configService.get<string>(ConfigEnum.DATABASE_USERNAME),
          password: configService.get<string>(ConfigEnum.DATABASE_PASSWORD),
          database: configService.get<string>(ConfigEnum.DATABASE_NAME),
          entities: [User, Profile, Logs, Roles], // 实体类
          autoLoadEntities: true, // 自动加载实体
          synchronize: configService.get<boolean>(ConfigEnum.DB_SYNCHRONIZE), // 是否自动同步实体到数据库，初始化的时候，生产环境建议关闭
          // synchronize: false,
          logging: ['error'], // 是否打印日志
        }) as TypeOrmModuleOptions,
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
