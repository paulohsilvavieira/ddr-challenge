import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { RecordingsService } from './recordings.service';
import { RecordingsDTO } from './interfaces/recordings.dto';
@Controller('recordings')
export class RecordingsController {
  constructor(private readonly recordingService: RecordingsService) {}

  @Post()
  async create(
    @Body() createRecordings: RecordingsDTO,
    @Res() response: Response,
  ) {
    try {
      await this.recordingService.createRecordings(createRecordings);
      return response.status(HttpStatus.CREATED).json({});
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: new Error(error).message,
      });
    }
  }
}
