import { Module } from '@nestjs/common';
import { UmbrellasService } from './umbrellas.service';
import { UmbrellasController } from './umbrellas.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Umbrella } from 'database/models/umbrella.model';
import { Client } from 'database/models/clients.model';

@Module({
  imports: [SequelizeModule.forFeature([Umbrella, Client])],
  exports: [SequelizeModule],
  controllers: [UmbrellasController],
  providers: [UmbrellasService],
})
export class UmbrellasModule {}
