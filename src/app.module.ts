import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { TabulationsModule } from './tabulations/tabulations.module';
import { RecordingsModule } from './recordings/recordings.module';
import { MatchingsModule } from './matchings/matchings.module';
import { ScheduleModule } from '@nestjs/schedule';

import path = require('path');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: path.join(__dirname, '../database.db'),
      entities: ['dist/**/*.entity.js'],
    }),
    ScheduleModule.forRoot(),
    MatchingsModule,
    TabulationsModule,
    RecordingsModule,
  ],
})
export class AppModule {}
