import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from 'src/entity/quote.entity';
import { CreateQuoteDto } from 'src/dto/quote/createQuote.dto';
import { UpdateQuoteDto } from 'src/dto/quote/updateQuote.dto';

@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(Quote)
    private readonly quoteRepository: Repository<Quote>,
  ) {}

  // Crear una nueva cotización
  async create(createQuoteDto: CreateQuoteDto): Promise<Quote> {
    const quote = this.quoteRepository.create(createQuoteDto);
    return await this.quoteRepository.save(quote);
  }

  // Obtener todas las cotizaciones
  async findAll(): Promise<Quote[]> {
    return await this.quoteRepository.find();
  }

  // Obtener una cotización por ID
  async findOne(id: number): Promise<Quote> {
    return await this.quoteRepository.findOne({ where: { idQuote: id } });
  }

  // Actualizar una cotización
  async update(id: number, updateQuoteDto: UpdateQuoteDto): Promise<Quote> {
    await this.quoteRepository.update(id, updateQuoteDto);
    return await this.findOne(id);
  }

  // Eliminar una cotización
  async remove(id: number): Promise<void> {
    await this.quoteRepository.delete(id);
  }
}