import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from 'database/models/clients.model';
import { InjectModel } from '@nestjs/sequelize';
import { Address } from 'database/models/address.model';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client) private readonly modelClient: typeof Client,
    @InjectModel(Address) private readonly modelAddress: typeof Address,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const newClient = await this.modelClient.create(createClientDto);
    return newClient;
  }

  async findAll() {
    const clients = await this.modelClient.findAll({
      include: Address
    });
    return clients;
  }

  async findOne(id: string) {
    const client = await this.modelClient.findByPk(id);
    if (client) return client
    return 'Client not Found'
  }
  
  async update(id: string, updateClientDto: UpdateClientDto) {
    const updateClient = await this.modelClient.findByPk(id);
    try {
      updateClient.set(updateClientDto)
      await updateClient.save()
      return updateClient
    } catch (error) {
      return 'Client not Found'
    }
  }
  
  async remove(id: string) {
    const client = await this.modelClient.findByPk(id);
    try {
      client.set({ isDeleted: true });
      client.save();
      return "Client deleted successfully"
    } catch (error) {
      return 'Client not Found'
    }
  }
}
