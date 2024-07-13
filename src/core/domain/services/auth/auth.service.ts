import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@core/domain/models/user.model';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findUserByEmail(email);
    if (user && user.password === password) {
      // Substitua por hash de senha
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async create(userData: User): Promise<User> {
    const user = await this.userService.findUserByEmail(userData.email);
    if (user) {
      throw new Error('User already exists');
    }

    return this.userService.createUser(userData);
  }
}
