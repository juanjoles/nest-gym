import { Estilos } from 'src/modules/estilos/entities/estilos.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';

@Entity()
export class Alumnos {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({type: 'varchar'})
    name:string;

    @Column({type: 'varchar'})
    lastname:string;

    @Column({type: 'varchar'})
    direction:string;

    @ManyToOne(() => Estilos, estilos => estilos.id_style,{
        
        eager:true,
    })
    @JoinColumn({ name: "id_style" })
    estilos:Estilos[];


    
    


    

}