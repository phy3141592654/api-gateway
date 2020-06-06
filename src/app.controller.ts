import { Controller, Get, Post, Req, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): object {
    return this.appService.healthCheck();
  }
  @Get('users')
  getUsers(@Query() query): object {
    return this.appService.getUsers(query);
  }
  @Post('users')
  postUsers(@Req() request: Request): object {
    return this.appService.createUsers(request.body);
  }
}
