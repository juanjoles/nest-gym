import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAlumnos } from '../dto/create-alumnos';
import { AlumnosService } from '../services/alumnos.service';

@Controller('alumnos')
export class AlumnosController {
    constructor (private alumnoService:AlumnosService){}

    @Post()
    addAlumno(@Body() alumnoadd:CreateAlumnos):any{
        return this.alumnoService.saveAlumnos(alumnoadd)
        
        
    }

    @Get()
    getAlumno():any{
        return this.alumnoService.findAll();
    }
}
