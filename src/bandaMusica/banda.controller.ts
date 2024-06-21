import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { BandaService} from './banda.service';
import { iBanda } from './banda.interface';
import { BandaDto } from './banda.dto';


@Controller('bandas')
export class BandaController {

    public constructor( private readonly bandaService: BandaService){}
    @Get()
    getBandas(): Promise<iBanda[]>{
        return this.bandaService.getBandas();
    }


    @Get(':id')
  async getBandasById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<any> {
    return await this.bandaService.getBandasById(id);
  }

  @Get('genero')
  async getBandasByGener(@Query('genero')genero:string): Promise<any> {
    return await this.bandaService.getBandasByGener(genero)
  }

  @Get('nombre')
  async getBandasByNombre(@Query('nombre')nombre:string): Promise<any> {
    return await this.bandaService.getBandasByNombre(nombre)
  }


    @Post()
  create(@Body() bandaDto: BandaDto): Promise<any> {
    return this.bandaService.addBanda(bandaDto)
}
@Delete(':id')
deleteBandaById(@Param('id') id: number) {
  return this.bandaService.deleteBandaById(id)

}
@Put(':id')
@HttpCode(204)
updateBandaById(
  @Param('id') id: number,
  @Body() body: iBanda,
): Promise<void> {
  return this.bandaService.updateBandaById(id, body)
}

}