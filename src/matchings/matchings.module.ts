import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MatchingsController } from './matchings.controller';
import { MatchingsService } from './matchings.service';
import { Matchings } from './matchings.entity';
import { MatchingsRepository } from './matchings.repository';

@Module({
  controllers: [MatchingsController],
  providers: [MatchingsService],
  imports: [TypeOrmModule.forFeature([Matchings, MatchingsRepository])],
})
export class MatchingsModule {}
