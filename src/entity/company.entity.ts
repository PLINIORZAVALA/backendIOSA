import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('company')
export class Company {
  @PrimaryGeneratedColumn()
  idCompany: number;

  @Column({ length: 255 })
  nombre: string;

  @Column({ length: 255 })
  descripcion: string;

  @Column()
  empleados: number;

  @Column()
  proyectos: number;

  @Column()
  experiencia: number;
}