import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
  @Get()
  tico(): string {
    return 'teco'
  }
}
