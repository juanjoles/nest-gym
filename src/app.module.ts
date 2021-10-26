import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosModule } from './modules/alumnos/alumnos.module';
import { AlumnosService } from './modules/alumnos/services/alumnos.service';
import { AlumnosController } from './modules/alumnos/controllers/alumnos.controller';
//import { config } from 'process';
import { DatabaseConfig } from './config/db.config';
import { EstilosModule } from './modules/estilos/estilos.module';
import { PagosModule } from './modules/pagos/pagos.module';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load:[config],
      envFilePath:['.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useClass:DatabaseConfig,
    }),
    AlumnosModule,
    EstilosModule,
    PagosModule],
  controllers: [AppController, AlumnosController],
  providers: [AppService, AlumnosService],
})
export class AppModule {}
