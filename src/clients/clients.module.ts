import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { Client } from 'database/models/clients.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Address } from 'database/models/address.model';

@Module({
  imports: [SequelizeModule.forFeature([Client, Address])],
  exports: [SequelizeModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
