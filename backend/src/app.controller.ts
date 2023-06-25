import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

}
