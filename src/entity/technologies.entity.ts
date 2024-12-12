import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Company } from './company.entity';

@Entity('tecnologia')
export class Tecnologia {
  @PrimaryGeneratedColumn()
  idTecnologia: number;

  @Column({ length: 255 })
  nombre: string;

  @Column({ length: 255 })
  tipo: string;

  @Column({ length: 255 })
  descripcion: string;

  @ManyToOne(() => Company, company => company.tecnologias)
  company: Company;
}