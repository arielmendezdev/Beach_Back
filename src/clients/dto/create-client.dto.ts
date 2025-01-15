import { IsBoolean, IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class CreateClientDto {
    @IsString()
    @MinLength(3)
    firstName: string
    
    @IsString()
    @MinLength(3)
    lastName: string
    
    @IsString()
    dni: string
    
    @IsBoolean()
    @IsOptional()
    isDeleted: boolean
    
    @IsBoolean()
    @IsOptional()
    isAvailable: boolean
    
    @IsString()
    @IsOptional()
    phone: string

    @IsString()
    @IsEmail()
    @IsOptional()
    email: string
    
    @IsString()
    @IsOptional()
    userName: string
    
    @IsString()
    @MaxLength(2)
    tentNumber: string
}
