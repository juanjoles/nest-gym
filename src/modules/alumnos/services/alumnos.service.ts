import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumnos } from '../entities/alumnos.entity';

@Injectable()
export class AlumnosService {
    constructor(
        @InjectRepository(Alumnos)
        private repo:Repository<Alumnos>,
    ){}

    async saveAlumnos(alumnos:any){
        await this.repo.insert(alumnos);
        return alumnos
    }

    async findAll(){
        return await this.repo.find();
    }
}
