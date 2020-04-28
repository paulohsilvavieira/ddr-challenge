import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class TabulationsController {
  @Get()
  findAll(): Array<string> {
    return ['John', 'Doe', 'Joe'];
  }
}
