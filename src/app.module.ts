import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Client } from 'src/database/models/clients.model';
import { Address } from 'src/database/models/address.model';
import { AddressesModule } from './addresses/addresses.module';
import { EmployeesModule } from './employees/employees.module';
import { CompaniesModule } from './companies/companies.module';
import { OwnersModule } from './owners/owners.module';
import { TentsModule } from './tents/tents.module';
import { UmbrellasModule } from './umbrellas/umbrellas.module';
import { Company } from 'src/database/models/company.model';
import { Owner } from 'src/database/models/owner.model';
import { Tent } from 'src/database/models/tent.model';
import { Umbrella } from 'src/database/models/umbrella.model';
import { Employed } from 'src/database/models/employed.model';
import pg from 'pg';

require('dotenv').config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PGHOST || process.env.DB_HOST,
      username: process.env.PGUSER || process.env.DB_USERNAME,
      database: process.env.PGDATABASE || process.env.DB_DATABASE,
      password: process.env.PGPASSWORD || process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
      models: [Client, Address, Company, Owner, Tent, Umbrella, Employed],
      dialectModule: pg,
      dialectOptions: {
        ssl: {
          require: true, // Requiere SSL
          rejectUnauthorized: false, // Si es un certificado auto-firmado
        },
      },
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([
      Client,
      Address,
      Company,
      Owner,
      Tent,
      Umbrella,
      Employed,
    ]),
    ClientsModule,
    AddressesModule,
    EmployeesModule,
    CompaniesModule,
    OwnersModule,
    TentsModule,
    UmbrellasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
