import { Injectable, HttpStatus } from '@nestjs/common';
import { TabulationsDTO } from './interfaces/tabulations.dto';
import { TabulationsRepository } from './tabulations.repository';
import { Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TabulationsService {
  constructor(
    @InjectRepository(TabulationsRepository)
    private readonly tabulationsRepository: TabulationsRepository,
    private readonly response: Response,
  ) {}

  async create(tabulation: TabulationsDTO): Promise<Response> {
    try {
      await this.tabulationsRepository.createTabulation(tabulation);
      return this.response.status(HttpStatus.CREATED).json({});
    } catch (error) {
      return this.response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: new Error(error).message,
      });
    }
  }
}
