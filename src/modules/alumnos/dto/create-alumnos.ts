import { IsNumber, IsString } from "class-validator";

export class CreateAlumnos {

        @IsString()
        name:string;

        @IsString()
        lastname:string;

        @IsString()
        direction:string;

        @IsNumber()
        id_style:number;
}
