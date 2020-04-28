import { Injectable } from '@nestjs/common';
import { RecordingsDTO } from './interfaces/recordings.dto';

import { RecordingsRepository } from './recordings.repository';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class RecordingsService {
  constructor(
    @InjectRepository(RecordingsRepository)
    private readonly recordingsRepository: RecordingsRepository,
  ) {}

  createRecordings(recording: RecordingsDTO): Promise<any> {
    return this.recordingsRepository.createRecording(recording);
  }
}
