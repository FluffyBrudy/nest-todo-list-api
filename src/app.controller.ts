import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth() {
    return { health: this.appService.getHealth() };
  }
}
