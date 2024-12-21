import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PDF } from 'src/entity/pdf.entity';
import { Repository } from 'typeorm';
import { createPDFdto } from 'src/dto/pdf/createPDF.dto';
import { updatePDFdto } from 'src/dto/pdf/update.dto';

@Injectable()
export class PdfService {   
 constructor(
    @InjectRepository(PDF)
    private readonly serviceRepository: Repository<PDF>,
  ) {}

  // Crear un nuevo servicio
  async create(createPDFdto: createPDFdto): Promise<PDF> {
    const service = this.serviceRepository.create(createPDFdto);
    return await this.serviceRepository.save(service);
  }

  // Obtener todos los servicios
  async findAll(): Promise<PDF[]> {
    return await this.serviceRepository.find({ relations: ['company'] });
  }

  // Obtener un servicio por ID
  async findOne(id: number): Promise<PDF> {
    return await this.serviceRepository.findOne({ where: { idPDF: id }, relations: ['company'] });
  } 

  // Actualizar un servicio
  async update(id: number, updateServiceDto: updatePDFdto): Promise<PDF> {
    await this.serviceRepository.update(id, updateServiceDto);
    return await this.findOne(id);
  }

  // Eliminar un servicio
  async remove(id: number): Promise<void> {
    await this.serviceRepository.delete(id);
  }
}   
