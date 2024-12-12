import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Company } from './company.entity';

@Entity('catalog')
export class Catalog {
  @PrimaryGeneratedColumn()
  idCatalog: number;

  @Column({ length: 255 })
  nombre: string;

  @Column({ length: 255 })
  descripcion: string;

  @Column({ length: 255 })
  imagen: string;

  @ManyToOne(() => Company, company => company.catalogs)
  company: Company;
}