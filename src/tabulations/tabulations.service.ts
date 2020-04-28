import { Injectable } from '@nestjs/common';
import { TabulationsDTO } from './interfaces/tabulations.dto';
import { TabulationsRepository } from './tabulations.repository';

import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TabulationsServices {
  constructor(
    @InjectRepository(TabulationsRepository)
    private readonly tabulationsRepository: TabulationsRepository,
  ) {}

  createTabulations(tabulation: TabulationsDTO): Promise<any> {
    return this.tabulationsRepository.createTabulation(tabulation);
  }
}
