import { Test, TestingModule } from '@nestjs/testing';

import { TabulationsController } from './tabulations.controller';

import { TabulationsDTO } from './interfaces/tabulations.dto';
import { TabulationsService } from './tabulations.service';
class TabulationsServiceMock {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async create() {}
}

describe('Tabulation Controller', () => {
  let controller: TabulationsController;
  let service: TabulationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabulationsController],
      providers: [
        {
          provide: TabulationsService,
          useClass: TabulationsServiceMock,
        },
      ],
      exports: [TabulationsService],
    }).compile();

    controller = module.get<TabulationsController>(TabulationsController);
    service = module.get(TabulationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should use its service to create', async () => {
    const tabulationsDto: TabulationsDTO = {
      clientName: 'teste',
      accessNumber: '12312',
      binedNumber: '112312312',
      protocol: '312312',
      dateService: '12312312',
    };

    const serviceSpy = jest
      .spyOn(service, 'create')
      .mockImplementation(async () => {
        return null;
      });

    await controller.create(tabulationsDto);

    expect(serviceSpy).toHaveBeenCalled();
    expect(serviceSpy).toHaveBeenCalledWith(tabulationsDto);
  });
});
