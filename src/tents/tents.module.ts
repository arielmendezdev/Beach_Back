import { Module } from '@nestjs/common';
import { TentsService } from './tents.service';
import { TentsController } from './tents.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tent } from 'src/database/models/tent.model';
import { User } from 'src/database/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Tent, User])],
  exports: [SequelizeModule],
  controllers: [TentsController],
  providers: [TentsService],
})
export class TentsModule {}
