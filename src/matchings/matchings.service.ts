import { Injectable, Logger, HttpStatus } from '@nestjs/common';
import { MatchingsDTO } from './interfaces/matchings.dto';
import { MatchingsRepository } from './matchings.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Cron } from '@nestjs/schedule';
import { Response } from 'express';
import { RecordingsRepository } from '../recordings/recordings.repository';
import { TabulationsRepository } from '../tabulations/tabulations.repository';

@Injectable()
export class MatchingsService {
  constructor(
    @InjectRepository(MatchingsRepository)
    private readonly matchingsRepository: MatchingsRepository,
    private readonly recordingsRepository: RecordingsRepository,
    private readonly tabulationsRepository: TabulationsRepository,
    private readonly response: Response,
  ) {}

  private readonly logger = new Logger(MatchingsService.name);

  async findAll() {
    try {
      const matchings = await this.matchingsRepository.findAllMatching();
      return this.response.status(HttpStatus.OK).json({
        matchings,
      });
    } catch (error) {
      return this.response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: new Error(error).message,
      });
    }
  }

  @Cron('* * */6 * * *')
  async makeMatching() {
    try {
      this.logger.log('Matching Job Started');
      const matchings = await this.matchingsRepository.findAllMatching();
      const tabulations = await this.tabulationsRepository.findAllTabulation();
      const recordings = await this.recordingsRepository.findAllRecording();

      matchings.forEach(async matching => {
        const tabulation = await this.tabulationsRepository.findOne(
          matching.tabulationId,
        );
        const recording = await this.recordingsRepository.findOne(
          matching.recordingId,
        );
        if (tabulation) {
          tabulations.slice(tabulations.indexOf(tabulation), 1);
        }
        if (recordings) {
          recordings.slice(recordings.indexOf(recording), 1);
        }
      });

      tabulations.forEach(async tabulation => {
        recordings.forEach(async recording => {
          if (
            tabulation.binedNumber === recording.phone ||
            tabulation.accessNumber === recording.phone
          ) {
            const MatchingsDTO: MatchingsDTO = {
              recordingId: recording.id,
              tabulationId: tabulation.id,
            };
            this.logger.log('Matching Occurred!');
            this.logger.log({
              recording,
              tabulation,
            });

            await this.matchingsRepository.createMatching(MatchingsDTO);
          }
        });
      });
      this.logger.log('Matching Job Finished');
    } catch (error) {
      return this.logger.log(new Error(error).message);
    }
  }
}
