import { IsOptional, IsString, IsUUID } from "class-validator";

export class CreateAddressDto {

  @IsString()
  @IsUUID()
  clientId: string;

  @IsString()
  nameStreet: string

  @IsString()
  numberStreet: string

  @IsString()
  @IsOptional()
  description: string

}
