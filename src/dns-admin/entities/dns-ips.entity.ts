import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity({name: 'DNSIP'})
export class DNSIP {

    @Index()
    @PrimaryGeneratedColumn()
    public id:number;

    @Column({nullable:false})
    public app:string;

    @Column({nullable:false})
    public dns:string;

    @Column({nullable:false})
    public ip:string;
}