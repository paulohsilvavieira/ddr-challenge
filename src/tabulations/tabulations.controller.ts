import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { TabulationsServices } from './tabulations.service';
import { TabulationsDTO } from './interfaces/tabulations.dto';

@Controller('tabulations')
export class TabulationsController {
  constructor(private readonly tabulationsService: TabulationsServices) {}
  @Post()
  async create(
    @Body() createTabulations: TabulationsDTO,
    @Res() response: Response,
  ) {
    try {
      await this.tabulationsService.createTabulations(createTabulations);
      return response.status(HttpStatus.CREATED).json({});
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: new Error(error).message,
      });
    }
  }
}
