import { Module } from '@nestjs/common';
import { TentsService } from './tents.service';
import { TentsController } from './tents.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tent } from 'database/models/tent.model';
import { Client } from 'database/models/clients.model';

@Module({
  imports: [SequelizeModule.forFeature([Tent, Client])],
  exports: [SequelizeModule],
  controllers: [TentsController],
  providers: [TentsService],
})
export class TentsModule {}
