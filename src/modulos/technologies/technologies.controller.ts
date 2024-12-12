import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { CreateTechnologiesDto } from 'src/dto/technologies/createTechnologies.dt';
import { UpdateTechnologiesDto } from 'src/dto/technologies/updateTechnologies.dt';

@Controller('technologies')
export class TechnologiesController {
  constructor(private readonly technologiesService: TechnologiesService) {}

  @Post()
  create(@Body() createTechnologiesDto: CreateTechnologiesDto) {
    return this.technologiesService.create(createTechnologiesDto);
  }

  @Get()
  findAll() {
    return this.technologiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.technologiesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTechnologiesDto: UpdateTechnologiesDto) {
    return this.technologiesService.update(+id, updateTechnologiesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.technologiesService.remove(+id);
  }
}