import { Module } from '@nestjs/common';
import { UmbrellasService } from './umbrellas.service';
import { UmbrellasController } from './umbrellas.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Umbrella } from 'src/database/models/umbrella.model';
import { User } from 'src/database/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Umbrella, User])],
  exports: [SequelizeModule],
  controllers: [UmbrellasController],
  providers: [UmbrellasService],
})
export class UmbrellasModule {}
