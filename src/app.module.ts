import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './modulos/company/company.module';
import { CatalogModule } from './modulos/catalog/catalog.module';
import { CertificationsModule } from './modulos/certifications/certifications.module';
import { QuoteModule } from './modulos/quote/quote.module';
import { ServiceModule } from './modulos/service/service.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',  // Asegúrate de que el usuario y la contraseña sean correctos
      password: '',      // Si tienes una contraseña, colócala aquí
      database: 'IOCSA',  // Asegúrate de que esta base de datos exista
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Evitar en producción, en desarrollo puedes usar true si quieres que la base se sincronice automáticamente
    }),
    CompanyModule,
    CatalogModule,
    CertificationsModule,
    QuoteModule,
    ServiceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
