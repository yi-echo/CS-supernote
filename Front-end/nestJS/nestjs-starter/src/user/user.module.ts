import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entites';
// import { ConfigModule } from '@nestjs/config';
@Module({
  // imports: [ConfigModule.forRoot({
  //   isGlobal: true, // Make ConfigModule global
  // })],
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
