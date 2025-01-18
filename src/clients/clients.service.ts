import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from 'database/models/clients.model';
import { InjectModel } from '@nestjs/sequelize';
import { Address } from 'database/models/address.model';
import { Tent } from 'database/models/tent.model';
import { Umbrella } from 'database/models/umbrella.model';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client) private readonly modelClient: typeof Client,
    @InjectModel(Address) private readonly modelAddress: typeof Address,
    @InjectModel(Tent) private readonly modelTent: typeof Tent,
    @InjectModel(Umbrella) private readonly modelUmbrella: typeof Umbrella,
  ) {}

  async create(createClientDto: CreateClientDto) {

    // console.log(createClientDto)

    if (createClientDto.tentId) {
      const tent = await this.modelTent.findByPk(createClientDto.tentId)
      if (tent.dataValues.isAvailable) {
        await tent.set({
          ...tent.dataValues,
          isAvailable: false
        })
        tent.save()
        const newClient = await this.modelClient.create(createClientDto);
        return newClient;
      } else {
        return 'La carpa esta ocupada'
      }
    } else {
      const newClient = await this.modelClient.create(createClientDto);
      return newClient;
    }

    // const tent = await this.modelTent.findByPk(createClientDto.tentId)


    
  }

  async findAll() {
    const clients = await this.modelClient.findAll(
      {
        include: [
          Address,
          Tent,
          Umbrella,
        ]
      }
  );
    return clients;
  }

  async findOne(id: string) {
    const client = await this.modelClient.findByPk(id);
    if (client) return client
    return 'Client not Found'
  }
  
  async update(id: string, updateClientDto: UpdateClientDto) {
    const updateClient = await this.modelClient.findByPk(id);

    if (!updateClientDto.tentId) {
      updateClient.set({
        ...updateClientDto,
        tentId: null,
      })
      await updateClient.save()
      return updateClient
    }

    if (updateClient.tentId) {
      const tent = await this.modelTent.findOne({
        where: { id: updateClient.tentId },
      });
      if (!tent) {
        updateClient.set(updateClientDto)
        await updateClient.save()
        return updateClient
      } else {
        return 'La carpa ya esta ocupada'
      }
    } else {
      updateClient.set(updateClientDto)
      await updateClient.save()
      const tent = await this.modelTent.findOne({
        where: { id: updateClient.tentId },
      });
      if (tent.isAvailable) {
        updateClient.set(updateClientDto)
        await updateClient.save()
        return updateClient
      } else{
        return 'La carpa ya esta ocupada'
      }
    }
  }
  
  async remove(id: string) {
    const client = await this.modelClient.findByPk(id);
    // console.log(client.dataValues.tentId)
    
    if (client.dataValues.tentId) {
      console.log(client.dataValues.tentId)
      const tent = await this.modelTent.findOne({
        where: { id: client.dataValues.tentId },
      });
      await tent.set({ isAvailable: true })
      tent.save();
    }

    client.set({ isDeleted: true });
    client.save();
    return "Client deleted successfully"
    
  }
}
