import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Company } from './company.entity';

@Entity('quote')
export class Quote {
  @PrimaryGeneratedColumn()
  idQuote: number;

  @Column({ length: 255 })
  nombre: string;

  @Column({ length: 255 })
  apellido: string;

  @Column({ length: 255 })
  tipoDePersona: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  telefono: string;

  @ManyToOne(() => Company, company => company.quotes)
  company: Company;
}