import { Controller,Get,Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {

    constructor(private userService:UserService,private configService:ConfigService) {}

    @Get()
    getUser(): string {
        console.log('Database Host:',this.configService.get('DATABASE_HOST'));
        return 'This action returns all users';
    }

    @Get('profile')
    getProfile(): any {
        return this.userService.getUserProfile();
    }

    @Post()
    createUser(): string {
        return 'This action adds a new user';
    }
}
