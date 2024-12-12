import { Module } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { QuoteController } from './quote.controller';
import { Quote } from 'src/entity/quote.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  controllers: [QuoteController],
  providers: [QuoteService],
})
export class QuoteModule {}
