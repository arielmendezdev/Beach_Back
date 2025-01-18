import { UUIDTypes } from "uuid";
import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { Client } from "./clients.model";

@Table({ tableName: 'tents', timestamps: true }) 
export class Tent extends Model<Tent> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  id: UUIDTypes

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  number: string
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  corridor: string
  
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  isDeleted: boolean

  @Column({
    type: DataType.STRING,
    defaultValue: true,
  })
  isAvailable: boolean

  @HasOne(() => Client)
  client!: Client

}