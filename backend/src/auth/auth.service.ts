import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/model/users/entities/user.entity';
import { UsersService } from 'src/model/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService    
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByName(username)
        console.log(user);
        if(user && user.password === pass){
            const { password, ...result } = user;
            return result;
        }
        
        throw new UnauthorizedException("Incorrect password");

    }

    async login(user: User) {
        const payload = {
            username: user.name,
            sub: user.id,
            role: user.role,
        };

        return {
            access_token: this.jwtService.sign(payload)
        };
    }

}
