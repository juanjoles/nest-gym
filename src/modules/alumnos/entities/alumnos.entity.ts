import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Alumnos {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column([{type: 'varchar'}])
    name:string;

    @Column({type: 'varchar'})
    lastname:string;

    @Column({type: 'varchar'})
    direction:string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

}