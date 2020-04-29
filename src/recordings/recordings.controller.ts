import { Controller, Post, Body } from '@nestjs/common';
import { RecordingsService } from './recordings.service';
import { RecordingsDTO } from './interfaces/recordings.dto';
@Controller('recordings')
export class RecordingsController {
  constructor(private readonly recordingService: RecordingsService) {}

  @Post()
  async create(@Body() createRecordings: RecordingsDTO) {
    return await this.recordingService.create(createRecordings);
  }
}
