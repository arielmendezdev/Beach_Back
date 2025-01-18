import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Owner } from 'src/database/models/owner.model';
import { Company } from 'src/database/models/company.model';

@Injectable()
export class OwnersService {
  constructor(
    @InjectModel(Owner) private readonly modelOwner: typeof Owner,
    @InjectModel(Company) private readonly modelCompany: typeof Company,
  ) {}

  create(createOwnerDto: CreateOwnerDto) {
    const newOwner = this.modelOwner.create(createOwnerDto);
    return newOwner;
  }

  findAll() {
    const owners = this.modelOwner.findAll({
      include: Company,
    });
    return owners;
  }

  async findOne(id: string) {
    const owner = await this.modelOwner.findByPk(id);
    if (owner) return owner;
    return `Owner ${id} not Found`;
  }

  async update(id: string, updateOwnerDto: UpdateOwnerDto) {
    const owner = await this.modelOwner.findByPk(id);
    if (owner) {
      owner.set(updateOwnerDto);
      owner.save();
      return owner;
    }
    return `Owner ${id} not Found`;
  }

  async remove(id: string) {
    const owner = await this.modelOwner.findByPk(id);
    if (owner) {
      owner.set({ isDeleted: true });
      owner.save();
      return owner;
    }
    return `Owner ${id} not Found`;
  }
}
