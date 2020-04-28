import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { TabulationsModule } from './tabulations/tabulations.module';
import { RecordingsModule } from './recordings/recordings.module';
import { MatchingsModule } from './matchings/matchings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TabulationsModule,
    RecordingsModule,
    MatchingsModule,
  ],
})
export class AppModule {}
