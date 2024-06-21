import { Module } from '@nestjs/common';
import { BandaController } from './banda.controller';
import { BandaService } from './banda.service';
@Module({ 
    controllers: [BandaController],
  providers: [BandaService]
})

  
export class BandaModule {}
