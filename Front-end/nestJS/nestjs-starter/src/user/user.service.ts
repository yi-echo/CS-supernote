import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUserProfile(): any {
        return {
            code: 200,
            data: {
                name: 'John Doe111',
                age: 30,
                email: '',
            },
            message: 'Profile fetched successfully',
        };
    }
}
