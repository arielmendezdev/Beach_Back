import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { User } from 'src/database/models/user.model';
import { Address } from 'database/models/address.model';
import { Tent } from 'src/database/models/tent.model';
import { Umbrella } from 'src/database/models/umbrella.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Address, Tent, Umbrella])],
  exports: [SequelizeModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
