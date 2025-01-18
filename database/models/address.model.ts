import { UUIDTypes } from 'uuid';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Client } from './clients.model';
import { Employed } from './employed.model';
import { Company } from './company.model';
import { Owner } from './owner.model';

@Table({ tableName: 'addresses', timestamps: true })
export class Address extends Model<Address> {
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
  nameStreet: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  numberStreet: string;

  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  isDeleted: boolean;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @ForeignKey(() => Client)
  @Column({
    type: DataType.UUID,
  })
  clientId: UUIDTypes;

  @ForeignKey(() => Employed)
  @Column({
    type: DataType.UUID,
  })
  employedId: UUIDTypes;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.UUID,
  })
  companyId: UUIDTypes;

  @ForeignKey(() => Owner)
  @Column({
    type: DataType.UUID,
  })
  ownerId: UUIDTypes;

  @BelongsTo(() => Client)
  client!: Client

  @BelongsTo(() => Employed)
  employed!: Employed

  @BelongsTo(() => Company)
  company!: Company

  @BelongsTo(() => Owner)
  owner!: Owner

}
