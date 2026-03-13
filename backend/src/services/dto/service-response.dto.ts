import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";



export class ServiceResponseDto {
    @IsString()
    id: string;
    

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    description: string;;

    @IsDate()
    @IsNotEmpty()
    createdAt: Date

    @IsDate()
    @IsNotEmpty()
    updatedAt: Date
}