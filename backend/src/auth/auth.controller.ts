import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HasRoles } from './has-role.decorator';
import { Role } from './role.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from './roles.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  signIn(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log(req.user);
    return req.user;
  }

  @HasRoles(Role.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('admin')
  hiAdmin(): string {
    return "hi admin";
  }

  @HasRoles(Role.Regular)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('usr')
  hiAnon(): string {
    return "hi user";
  }

}
