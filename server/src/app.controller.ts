import { Controller, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(): any {
    return this.appService.users();
  }

  @Get('jobs')
  getJobs(): any {
    return this.appService.jobs();
  }

  @Get('prices')
  getPrices(): any {
    return this.appService.prices();
  }
}
