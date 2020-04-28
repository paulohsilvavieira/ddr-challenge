import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MatchingsController } from './matchings.controller';
import { MatchingsService } from './matchings.service';
import { Matchings } from './matchings.entity';
import { MatchingsRepository } from './matchings.repository';
import { RecordingsRepository } from 'src/recordings/recordings.repository';
import { TabulationsRepository } from 'src/tabulations/tabulations.repository';

@Module({
  controllers: [MatchingsController],
  providers: [MatchingsService, RecordingsRepository, TabulationsRepository],
  imports: [TypeOrmModule.forFeature([Matchings, MatchingsRepository])],
})
export class MatchingsModule {}
