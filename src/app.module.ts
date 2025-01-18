import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import pg from 'pg';

import { AddressesModule } from './addresses/addresses.module';
import { Address } from 'src/database/models/address.model';
import { CompaniesModule } from './companies/companies.module';
import { Company } from 'src/database/models/company.model';
import { EmployeesModule } from './employees/employees.module';
import { Employed } from 'src/database/models/employed.model';
import { OwnersModule } from './owners/owners.module';
import { Owner } from 'src/database/models/owner.model';
import { TentsModule } from './tents/tents.module';
import { Tent } from 'src/database/models/tent.model';
import { UmbrellasModule } from './umbrellas/umbrellas.module';
import { Umbrella } from 'src/database/models/umbrella.model';
import { UsersModule } from './users/users.module';
import { User } from 'src/database/models/user.model';

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
      models: [User, Address, Company, Owner, Tent, Umbrella, Employed],
      dialectModule: pg,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([
      User,
      Address,
      Company,
      Owner,
      Tent,
      Umbrella,
      Employed,
    ]),
    UsersModule,
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
