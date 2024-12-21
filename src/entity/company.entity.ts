import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Certificare } from './certifications.entity';
import { Tecnologia } from './technologies.entity';
import { Service } from './service.entity';
import { Catalog } from './catalog.entity';
import { Quote } from './quote.entity';
import { PDF } from './pdf.entity';

@Entity('company')
export class Company {
  @PrimaryGeneratedColumn()
  idCompany: number;

  @Column({ length: 255 })
  nombre: string;

  @Column({ length: 255 })
  descripcion: string;

  @Column({ length: 255 })
  imagen: string;

  @Column()
  empleados: number;

  @Column()
  proyectos: number;

  @Column()
  experiencia: number;

  @OneToMany(() => Certificare, certificare => certificare.company)
  certificares: Certificare[];

  @OneToMany(() => Tecnologia, tecnologia => tecnologia.company)
  tecnologias: Tecnologia[];

  @OneToMany(() => Service, service => service.company)
  services: Service[];

  @OneToMany(() => Catalog, catalog => catalog.company)
  catalogs: Catalog[];

  @OneToMany(() => Quote, quote => quote.company)
  quotes: Quote[];
  
  @OneToMany(() => PDF, pdf => pdf.company)
  pdf: PDF[];
}