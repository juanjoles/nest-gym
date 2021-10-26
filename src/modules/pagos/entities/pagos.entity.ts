import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import { Alumnos } from 'src/modules/alumnos/entities/alumnos.entity';
import { Estilos } from 'src/modules/estilos/entities/estilos.entity';

@Entity()
export class Pagos {
    @PrimaryGeneratedColumn('increment')
    id_pago:number;

    @ManyToOne(() => Alumnos, alumno => alumno.id)
    @JoinColumn({ name: "id_alumno" })
    alumno = Alumnos

    @ManyToOne(() => Estilos, estilos => estilos.id_style)
    @JoinColumn({ name: "id_style" })
    estilos = Estilos

    @Column({type: 'date'})
    date:Date

}