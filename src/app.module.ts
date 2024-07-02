import { Module } from '@nestjs/common';
import { BandaModule } from './bandaMusica/banda.module';

@Module({
  imports: [BandaModule],
})
export class AppModule {}
