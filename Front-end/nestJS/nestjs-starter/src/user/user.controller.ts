import { Controller,Get,Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService) {}

    @Get()
    getUser(): string {
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
