import { Test, TestingModule } from '@nestjs/testing';

import { MatchingsController } from './matchings.controller';

import { MatchingsService } from './matchings.service';
class MatchingsServiceMock {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async findAll() {}
}

describe('Matching Controller', () => {
  let controller: MatchingsController;
  let service: MatchingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchingsController],
      providers: [
        {
          provide: MatchingsService,
          useClass: MatchingsServiceMock,
        },
      ],
      exports: [MatchingsService],
    }).compile();

    controller = module.get<MatchingsController>(MatchingsController);
    service = module.get(MatchingsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should use its service to getOne', async () => {
    const serviceSpy = jest
      .spyOn(service, 'findAll')
      .mockImplementation(async () => {
        return null;
      });

    await controller.findAll();

    expect(serviceSpy).toHaveBeenCalled();
    expect(serviceSpy).toHaveBeenCalledWith();
  });
});
