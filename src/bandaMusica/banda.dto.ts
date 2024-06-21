import { IsString, IsInt } from "class-validator"

export class BandaDto {
    @IsString()
    nombre: string;
    @IsString()
    genero:string;
    @IsInt()
    año_de_creacion: number;
   
}