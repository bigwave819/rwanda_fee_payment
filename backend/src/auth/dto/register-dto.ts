import { IsNotEmpty, IsString } from 'class-validator'

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string

    @IsString()
    @IsNotEmpty()
    password: string
}