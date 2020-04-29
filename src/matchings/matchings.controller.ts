import { Controller, Get } from '@nestjs/common';

import { MatchingsService } from './matchings.service';

@Controller('matchings')
export class MatchingsController {
  constructor(private readonly macthingsService: MatchingsService) {}

  @Get()
  async findAll() {
    return await this.macthingsService.findAll();
  }
}
