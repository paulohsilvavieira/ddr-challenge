import { Controller, Post, Body } from '@nestjs/common';
import { TabulationsService } from './tabulations.service';
import { TabulationsDTO } from './interfaces/tabulations.dto';

@Controller('tabulations')
export class TabulationsController {
  constructor(private readonly tabulationsService: TabulationsService) {}

  @Post()
  async create(@Body() createTabulations: TabulationsDTO) {
    await this.tabulationsService.create(createTabulations);
  }
}
