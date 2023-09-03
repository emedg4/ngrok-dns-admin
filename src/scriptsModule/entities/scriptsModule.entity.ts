import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity({name:'ScriptsModule' })
export class ScriptsModule {

    @PrimaryGeneratedColumn()
    public id:number;
    
    @Index()
    @Column({nullable:false})
    public name:string;

    @Column({nullable:false})
    public script:string;
}