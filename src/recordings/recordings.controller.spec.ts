import { Test, TestingModule } from '@nestjs/testing';

import { RecordingsController } from './recordings.controller';

import { RecordingsDTO } from './interfaces/recordings.dto';
import { RecordingsService } from './recordings.service';
class RecordingsServiceMock {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async create() {}
}

describe('Recording Controller', () => {
  let controller: RecordingsController;
  let service: RecordingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordingsController],
      providers: [
        {
          provide: RecordingsService,
          useClass: RecordingsServiceMock,
        },
      ],
      exports: [RecordingsService],
    }).compile();

    controller = module.get<RecordingsController>(RecordingsController);
    service = module.get(RecordingsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should use its service to create', async () => {
    const recordingsDto: RecordingsDTO = {
      phone: '2312312312',
      ramal: '2312',
      dateRecording: '1231231',
    };

    const serviceSpy = jest
      .spyOn(service, 'create')
      .mockImplementation(async () => {
        return null;
      });

    await controller.create(recordingsDto);

    expect(serviceSpy).toHaveBeenCalled();
    expect(serviceSpy).toHaveBeenCalledWith(recordingsDto);
  });
});
