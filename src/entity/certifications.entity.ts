import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Company } from './company.entity';

@Entity('certificare')
export class Certificare {
  @PrimaryGeneratedColumn()
  idCertificare: number;

  @Column({ length: 255 })
  nombreCert: string;

  @Column({ length: 255 })
  datosCert: string;

  @Column({ length: 64 })
  imgCert: string;

  @ManyToOne(() => Company, company => company.certificares)
  company: Company;
}