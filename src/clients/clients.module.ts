import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';

import { Client } from 'src/database/models/clients.model';
import { Address } from 'src/database/models/address.model';
import { Tent } from 'src/database/models/tent.model';
import { Umbrella } from 'src/database/models/umbrella.model';

@Module({
  imports: [SequelizeModule.forFeature([Client, Address, Tent, Umbrella])],
  exports: [SequelizeModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
