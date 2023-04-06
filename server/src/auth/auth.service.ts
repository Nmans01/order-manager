import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    validateUser(email: string) {
        const user = this.usersService.getUserByEmail(email);

        // If user exists but is not enabled, user is not valid.
        if (user && !user.crudInfo.arguments.enabled) {
            return null;
        }
        
        return user;
    }

    async generateToken(user: User): Promise<string> {
        const payload = { email: user.email, sub: user.id };
        const token = await this.jwtService.signAsync(payload);
        return token;
    }
}
