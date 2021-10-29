import { Alumnos } from 'src/modules/alumnos/entities/alumnos.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';

@Entity()
export class Estilos {

    @PrimaryGeneratedColumn('increment')
    id_style:number;

    @Column ({type: 'varchar'})
    description:string;

    @Column({type: 'int'})
    price:number;

    // @ManyToOne(() => Alumnos, alumno => alumno.estilos)
    // alumno:Alumnos

    @OneToMany(() => Alumnos, alumno => alumno.estilos )
    alumno:Alumnos
}