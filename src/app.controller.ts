import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Controller is a tipicall part of a module for API endpoints definition
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
