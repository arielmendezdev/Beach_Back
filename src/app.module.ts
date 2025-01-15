import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Client } from 'database/models/clients.model';
import { Address } from 'database/models/address.model';
import { AddressesModule } from './addresses/addresses.module';

require('dotenv').config();

@Module({
  imports: [
    ClientsModule,
    AddressesModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PGHOST || process.env.DB_HOST,
      username: process.env.PGUSER || process.env.DB_USERNAME,
      database: process.env.PGDATABASE || process.env.DB_DATABASE,
      password: process.env.PGPASSWORD || process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
      models: [Client, Address],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Client, Address]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
