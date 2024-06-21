import { Module } from '@nestjs/common';
import { BandaModule } from './bandaMusica/banda.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [ ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
    BandaModule,
  ],
  
})
export class AppModule {}
