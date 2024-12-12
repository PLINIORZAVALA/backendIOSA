import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateConpanyDto } from 'src/dto/company/createCompany.dt';
import { UpdateCatalogDto } from 'src/dto/catalog/updateCatalog.dt';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateConpanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCatalogDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}