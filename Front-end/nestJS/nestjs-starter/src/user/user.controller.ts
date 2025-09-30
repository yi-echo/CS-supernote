import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/config.enum';
import { User } from './user.entites';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get()
  getAllUser() {
    return this.userService.findAll();
  }

  @Post()
  ceaterUser() {
    const user = {
      username: 'che213n',
      password: '1234321356',
    } as User;
    return this.userService.create(user);
  }

  @Get()
  getUser(): string {
    console.log(
      'Database Host:',
      this.configService.get(ConfigEnum.DATABASE_HOST),
    );
    return 'This action returns all users';
  }

  @Get('/profile')
  getProfile(): any {
    return this.userService.findUseProfile(2);
  }

  @Post()
  createUser(): string {
    return 'This action adds a new user';
  }
}
