import { IsDate, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { Type } from "class-transformer";

export class CreateBillDto {
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsString()
    @IsNotEmpty()
    @IsUUID()
    serviceId: string;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    dueDate: Date;
}