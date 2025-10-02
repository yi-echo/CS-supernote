import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entites';
import { Logs } from 'src/logs/logs.entites';
// import { ConfigModule } from '@nestjs/config';
@Module({
  // imports: [ConfigModule.forRoot({
  //   isGlobal: true, // Make ConfigModule global
  // })],
  imports: [TypeOrmModule.forFeature([User, Logs])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
