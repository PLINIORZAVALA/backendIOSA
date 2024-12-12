import { Module } from '@nestjs/common';
import { CertificareService } from './certifications.service';
import { CertificareController } from './certifications.controller';
import { Certificare } from 'src/entity/certifications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Certificare])],
  controllers: [CertificareController],
  providers: [CertificareService],
})
export class CertificationsModule {}
