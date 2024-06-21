import { Injectable, NotFoundException } from '@nestjs/common';
import { iBanda } from './banda.interface';
import { BandaDto } from './banda.dto';
import { query } from 'express';
const url_banda : string = "http://localhost:3030/bandas/";


@Injectable()
export class BandaService {

   async getBandas(): Promise<iBanda[]> {
      const res = await fetch(url_banda);
      const bandas = await res.json();
      return bandas;
    }
 
    async getBandasById(id:number): Promise<iBanda>{
      try {
         const res = await fetch(url_banda + id);
         const banda = await res.json();
         return banda;
       } catch(error){
   throw new NotFoundException(`la Banda no existe`);
        } 

       }


       async getBandasByGener(genero :string): Promise<iBanda>{
        try {
           const res = await fetch(url_banda + genero);
           const banda = await res.json();
           return banda;
         } catch(error){
     throw new NotFoundException(`la Banda no existe`);
          } 
         }

         async getBandasByNombre(nombre :string): Promise<iBanda>{
          try {
             const res = await fetch(url_banda + nombre);
             const banda = await res.json();
             return banda;
           } catch(error){
       throw new NotFoundException(`la Banda no existe`);
            } 
           }

    
    async addBanda(bandaDto: BandaDto): Promise<iBanda> {
      const newBanda = { ...bandaDto };
      const res = await fetch(url_banda, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBanda),
      });
      const parsedResponse = await res.json();
      return parsedResponse;
    }
    async deleteBandaById(id: number): Promise<any> {
      const res = await fetch(url_banda + id, {
        method: 'DELETE',
      });
      const parsedResponse = await res.json();
      return parsedResponse;
    }
    
async updateBandaById(id: number, body: BandaDto): Promise<void> {
   const isBanda = await this.getBandasById(id);
   if (!Object.keys(isBanda).length) return; //early return
   const updatedBanda = { ...body, id };
   const res = await fetch(url_banda + id, {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(updatedBanda),
   });
   const parsedResponse = await res.json();
   return parsedResponse;
 }
    
}
