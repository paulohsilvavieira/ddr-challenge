import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordingsController } from './recordings.controller';
import { RecordingsService } from './recordings.service';
import { Recordings } from './recordings.entity';
import { RecordingsRepository } from './recordings.repository';

@Module({
  controllers: [RecordingsController],
  providers: [RecordingsService],
  imports: [TypeOrmModule.forFeature([Recordings, RecordingsRepository])],
})
export class RecordingsModule {}
