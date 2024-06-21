import { Test, TestingModule } from '@nestjs/testing';
import { BandaController } from './banda.controller';

describe('BandaMusicaController', () => {
  let controller: BandaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandaController],
    }).compile();

    controller = module.get<BandaController>(BandaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
