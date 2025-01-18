import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Address } from 'src/database/models/address.model';
import { Client } from 'src/database/models/clients.model';

@Module({
  imports: [SequelizeModule.forFeature([Address, Client])],
  exports: [SequelizeModule],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}
