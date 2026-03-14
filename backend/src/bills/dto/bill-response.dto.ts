import { IsDate, IsInt, IsNotEmpty, IsString, IsNumber } from "class-validator";

export class BillResponseDto {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    serviceId: string;

    @IsDate()
    @IsNotEmpty()
    dueDate: Date;

    @IsDate()
    @IsNotEmpty()
    createdAt: Date;

    @IsDate()
    @IsNotEmpty()
    updatedAt: Date;
}