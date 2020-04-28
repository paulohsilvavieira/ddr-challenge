import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

import { MatchingsService } from './matchings.service';

@Controller('matchings')
export class MatchingsController {
  constructor(private readonly macthingsService: MatchingsService) {}

  @Get()
  async findAll(@Res() response: Response) {
    try {
      const matchings = await this.macthingsService.findAll();
      return response.status(HttpStatus.OK).json({
        matchings,
      });
    } catch (error) {}
    return;
  }
}
