import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from 'database/models/address.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AddressesService {

  constructor(@InjectModel(Address) private readonly addressModel: typeof Address) {}

  create(createAddressDto: CreateAddressDto) {
    const newAddress = this.addressModel.create(createAddressDto)
    return newAddress
  }

  findAll() {
    const address = this.addressModel.findAll();
    return address;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
