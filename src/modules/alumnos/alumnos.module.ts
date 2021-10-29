import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnosController } from './controllers/alumnos.controller';
import { Alumnos } from './entities/alumnos.entity';
import { AlumnosService } from './services/alumnos.service';

@Module({
    imports:[TypeOrmModule.forFeature([Alumnos])],
    providers:[AlumnosService],
    exports:[AlumnosService],
    controllers:[AlumnosController]
})
export class AlumnosModule {}
