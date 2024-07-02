import { Test, TestingModule } from '@nestjs/testing';
import { BandaService } from './banda.service';

describe('BandaMusicaService', () => {
  let service: BandaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandaService],
    }).compile();

    service = module.get<BandaService>(BandaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('prueba del metodo get', () => {
    expect(service).toBeDefined();
  });
});
