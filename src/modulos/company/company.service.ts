import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from 'src/entity/company.entity';
import { CreateConpanyDto } from 'src/dto/company/createCompany.dt';
import { UpdateCatalogDto } from 'src/dto/catalog/updateCatalog.dt';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  // Crear una nueva compañía
  async create(createCompanyDto: CreateConpanyDto): Promise<Company> {
    const company = this.companyRepository.create(createCompanyDto);
    return await this.companyRepository.save(company);
  }

  // Obtener todas las compañías
  async findAll(): Promise<Company[]> {
    return await this.companyRepository.find({ relations: ['certificares', 'tecnologias', 'services', 'catalogs', 'quotes'] });
  }

  // Obtener una compañía por ID
  async findOne(id: number): Promise<Company> {
    return await this.companyRepository.findOne({ where: { idCompany: id }, relations: ['certificares', 'tecnologias', 'services', 'catalogs', 'quotes'] });
  }

  // Actualizar una compañía
  async update(id: number, updateCompanyDto: UpdateCatalogDto): Promise<Company> {
    await this.companyRepository.update(id, updateCompanyDto);
    return await this.findOne(id);
  }

  // Eliminar una compañía
  async remove(id: number): Promise<void> {
    await this.companyRepository.delete(id);
  }
}