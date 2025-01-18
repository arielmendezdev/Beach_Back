import { Module } from '@nestjs/common';
import { UmbrellasService } from './umbrellas.service';
import { UmbrellasController } from './umbrellas.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Umbrella } from 'src/database/models/umbrella.model';
import { Client } from 'src/database/models/clients.model';

@Module({
  imports: [SequelizeModule.forFeature([Umbrella, Client])],
  exports: [SequelizeModule],
  controllers: [UmbrellasController],
  providers: [UmbrellasService],
})
export class UmbrellasModule {}
