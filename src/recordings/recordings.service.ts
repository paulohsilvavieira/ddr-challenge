import { Injectable, HttpStatus } from '@nestjs/common';
import { RecordingsDTO } from './interfaces/recordings.dto';
import { Response } from 'express';
import { RecordingsRepository } from './recordings.repository';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class RecordingsService {
  constructor(
    @InjectRepository(RecordingsRepository)
    private readonly recordingsRepository: RecordingsRepository,
    private readonly response: Response,
  ) {}

  async create(recording: RecordingsDTO): Promise<Response> {
    try {
      await this.recordingsRepository.createRecording(recording);
      return this.response.status(HttpStatus.CREATED).json({});
    } catch (error) {
      return this.response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: new Error(error).message,
      });
    }
  }
}
