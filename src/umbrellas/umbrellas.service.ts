import { Injectable } from '@nestjs/common';
import { CreateUmbrellaDto } from './dto/create-umbrella.dto';
import { UpdateUmbrellaDto } from './dto/update-umbrella.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Umbrella } from 'src/database/models/umbrella.model';
import { Client } from 'src/database/models/clients.model';

@Injectable()
export class UmbrellasService {
  constructor(
    @InjectModel(Umbrella) private readonly modelUmbrella: typeof Umbrella,
    @InjectModel(Client) private readonly modelClient: typeof Client,
  ) {}

  create(createUmbrellaDto: CreateUmbrellaDto) {
    return 'This action adds a new umbrella';
  }

  findAll() {
    const umbrellas = this.modelUmbrella.findAll({
      include: Client,
    });
    return umbrellas;
  }

  findOne(id: number) {
    return `This action returns a #${id} umbrella`;
  }

  update(id: number, updateUmbrellaDto: UpdateUmbrellaDto) {
    return `This action updates a #${id} umbrella`;
  }

  remove(id: number) {
    return `This action removes a #${id} umbrella`;
  }
}
