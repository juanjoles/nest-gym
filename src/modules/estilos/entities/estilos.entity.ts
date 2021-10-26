import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Estilos {

    @PrimaryGeneratedColumn('increment')
    id_style:number;

    @Column ({type: 'varchar'})
    description:string;

    @Column({type: 'int'})
    price:number;
}