import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Certificare } from 'src/entity/certifications.entity';
import { createCertificationsDto } from 'src/dto/certifications/createCertifications.dto';
import { UpdateCertificationsDto } from 'src/dto/certifications/updateCertifications.dto';

@Injectable()
export class CertificareService {
  constructor(
    @InjectRepository(Certificare)
    private readonly certificareRepository: Repository<Certificare>,
  ) {}

  // Crear una nueva certificación
  async create(createCertificationsDto: createCertificationsDto): Promise<Certificare> {
    const certificare = this.certificareRepository.create(createCertificationsDto);
    return await this.certificareRepository.save(certificare);
  }

  // Obtener todas las certificaciones
  async findAll(): Promise<Certificare[]> {
    return await this.certificareRepository.find({ relations: ['company'] });
  }

  // Obtener una certificación por ID
  async findOne(id: number): Promise<Certificare> {
    return await this.certificareRepository.findOne({ where: { idCertificare: id }, relations: ['company'] });
  }

  // Actualizar una certificación
  async update(id: number, updateCertificationsDto: UpdateCertificationsDto): Promise<Certificare> {
    await this.certificareRepository.update(id, updateCertificationsDto);
    return await this.findOne(id);
  }

  // Eliminar una certificación
  async remove(id: number): Promise<void> {
    await this.certificareRepository.delete(id);
  }
}