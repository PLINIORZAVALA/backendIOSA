import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      synchronize: true, // Evitar en producción, en desarrollo puedes usar true si quieres que la base se sincronice automáticamente
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
