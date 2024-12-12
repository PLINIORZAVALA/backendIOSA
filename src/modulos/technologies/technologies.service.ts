import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tecnologia } from 'src/entity/technologies.entity';
import { CreateTechnologiesDto } from 'src/dto/technologies/createTechnologies.dt';
import { UpdateTechnologiesDto } from 'src/dto/technologies/updateTechnologies.dt';

@Injectable()
export class TechnologiesService {
  constructor(
    @InjectRepository(Tecnologia)
    private readonly tecnologiaRepository: Repository<Tecnologia>,
  ) {}

  // Crear una nueva tecnología
  async create(createTechnologiesDto: CreateTechnologiesDto): Promise<Tecnologia> {
    const tecnologia = this.tecnologiaRepository.create(createTechnologiesDto);
    return await this.tecnologiaRepository.save(tecnologia);
  }

  // Obtener todas las tecnologías
  async findAll(): Promise<Tecnologia[]> {
    return await this.tecnologiaRepository.find({ relations: ['company'] });
  }

  // Obtener una tecnología por ID
  async findOne(id: number): Promise<Tecnologia> {
    return await this.tecnologiaRepository.findOne({ where: { idTecnologia: id }, relations: ['company'] });
  }

  // Actualizar una tecnología
  async update(id: number, updateTechnologiesDto: UpdateTechnologiesDto): Promise<Tecnologia> {
    await this.tecnologiaRepository.update(id, updateTechnologiesDto);
    return await this.findOne(id);
  }

  // Eliminar una tecnología
  async remove(id: number): Promise<void> {
    await this.tecnologiaRepository.delete(id);
  }
}