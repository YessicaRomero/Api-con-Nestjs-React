import { Test, TestingModule } from '@nestjs/testing';
import { BandaController } from './banda.controller';
import { BandaService } from './banda.service';
import { BandaModule } from './banda.module';

describe('BandaMusicaController', () => {
  let controller: BandaController;
  let service : BandaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandaModule],
    }).compile();

    controller = module.get<BandaController>(BandaController);
    service = module.get<BandaService>(BandaService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });





});
