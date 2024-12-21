import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Company } from './company.entity';

@Entity('DPF')
export class PDF {
  @PrimaryGeneratedColumn()
  idPDF: number;

  @Column({ length: 255 })
  catalogPDF: string;

  @ManyToOne(() => Company, company => company.pdf)
  company: Company;
}