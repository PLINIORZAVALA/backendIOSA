import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalog } from 'src/entity/catalog.entity';
import { CreateCatalogDto } from 'src/dto/catalog/createCatalog.dto'; 
import { UpdateCatalogDto } from 'src/dto/catalog/updateCatalog.dto';

@Injectable()
export class CatalogService {
  constructor(
    @InjectRepository(Catalog)
    private readonly catalogRepository: Repository<Catalog>,
  ) {}

  // Crear un nuevo catálogo
  async create(createCatalogDto: CreateCatalogDto): Promise<Catalog> {
    const catalog = this.catalogRepository.create(createCatalogDto);
    return await this.catalogRepository.save(catalog);
  }

  // Obtener todos los catálogos
  async findAll(): Promise<Catalog[]> {
    return await this.catalogRepository.find({ relations: ['company'] });
  }

  // Obtener un catálogo por ID
  async findOne(id: number): Promise<Catalog> {
    return await this.catalogRepository.findOne({ where: { idCatalog: id }, relations: ['company'] });
  }

  // Actualizar un catálogo
  async update(id: number, updateCatalogDto: UpdateCatalogDto): Promise<Catalog> {
    await this.catalogRepository.update(id, updateCatalogDto);
    return await this.findOne(id);
  }

  // Eliminar un catálogo
  async remove(id: number): Promise<void> {
    await this.catalogRepository.delete(id);
  }
}