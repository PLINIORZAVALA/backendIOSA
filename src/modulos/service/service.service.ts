import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from 'src/entity/service.entity';
import { CreateServiceDto } from 'src/dto/service/createService.dto';
import { UpdateServiceDto } from 'src/dto/service/updateService.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  // Crear un nuevo servicio
  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const service = this.serviceRepository.create(createServiceDto);
    return await this.serviceRepository.save(service);
  }

  // Obtener todos los servicios
  async findAll(): Promise<Service[]> {
    return await this.serviceRepository.find({ relations: ['company'] });
  }

  // Obtener un servicio por ID
  async findOne(id: number): Promise<Service> {
    return await this.serviceRepository.findOne({ where: { idService: id }, relations: ['company'] });
  }

  // Actualizar un servicio
  async update(id: number, updateServiceDto: UpdateServiceDto): Promise<Service> {
    await this.serviceRepository.update(id, updateServiceDto);
    return await this.findOne(id);
  }

  // Eliminar un servicio
  async remove(id: number): Promise<void> {
    await this.serviceRepository.delete(id);
  }
}