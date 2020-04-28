import { Injectable } from '@nestjs/common';
import { MatchingsDTO } from './interfaces/matchings.dto';
import { MatchingsRepository } from './matchings.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MatchingsService {
  constructor(
    @InjectRepository(MatchingsRepository)
    private readonly matchingsRepository: MatchingsRepository,
  ) {}

  findAll(): Promise<MatchingsDTO[]> {
    return this.matchingsRepository.findAllMatching();
  }
}
