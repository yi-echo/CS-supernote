import { Controller,Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUser(): string {
        return 'This action returns all users';
    }

    @Get('profile')
    getProfile(): any {
        return {
            code: 200,
            data: {
                name: 'John Doe',
                age: 30,
                email: '',
            },
            message: 'Profile fetched successfully',
        };
    }
}
