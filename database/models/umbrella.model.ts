import { UUIDTypes } from 'uuid';
import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { Client } from './clients.model';

@Table({ tableName: 'umbrellas', timestamps: true })
export class Umbrella extends Model<Umbrella> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: UUIDTypes;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  number: string;

  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  isDeleted: boolean;

  @Column({
    type: DataType.STRING,
    defaultValue: true,
  })
  isAvailable: boolean;

  @HasOne(() => Client)
  client!: Client;
}
