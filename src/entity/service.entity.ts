import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Company } from './company.entity';

@Entity('service')
export class Service {
  @PrimaryGeneratedColumn()
  idService: number;

  @Column({ length: 255 })
  tipo: string;

  @Column({ length: 255 })
  descripcion: string;

  @Column({ length: 64 })
  img: string;

  @ManyToOne(() => Company, company => company.services)
  company: Company;
}