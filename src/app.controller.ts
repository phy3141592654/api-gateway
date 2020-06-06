import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

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
}
