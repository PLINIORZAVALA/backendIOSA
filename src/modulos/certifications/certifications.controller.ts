import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CertificareService } from './certifications.service';
import { createCertificationsDto } from 'src/dto/certifications/createCertifications.dto';
import { UpdateCertificationsDto } from 'src/dto/certifications/updateCertifications.dto';

@Controller('certificare')
export class CertificareController {
  constructor(private readonly certificareService: CertificareService) {}

  @Post()
  create(@Body() createCertificationsDto: createCertificationsDto) {
    return this.certificareService.create(createCertificationsDto);
  }

  @Get()
  findAll() {
    return this.certificareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificareService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCertificationsDto: UpdateCertificationsDto) {
    return this.certificareService.update(+id, updateCertificationsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificareService.remove(+id);
  }
}