import { AuthService } from '@core/domain/services/auth/auth.service';
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './security/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Request() req) {
    return this.authService.create(req.body);
  }
}
