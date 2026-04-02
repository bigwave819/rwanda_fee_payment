import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { BillResponseDto } from './dto/bill-response.dto';
import { Bill } from '@prisma/client';


@Injectable()
export class BillsService {

    constructor(private prisma: PrismaService) { }

    //create the bill
    async createBill(userId: string, createBillDto: CreateBillDto): Promise<BillResponseDto> {
        const { amount, serviceId, dueDate } = createBillDto;
        const service = await this.prisma.service.findUnique({
            where: { id: serviceId }
        });

        if (!service) {
            throw new NotFoundException('Service not found');
        }

        const bill = await this.prisma.bill.create({
            data: {
                amount: Number(amount),
                dueDate: new Date(dueDate),
                userId,
                serviceId: serviceId
            }
        });

        return bill as BillResponseDto;
    }

    // get all bills
    async getAllBills(): Promise<BillResponseDto[]> {

        const bills = await this.prisma.bill.findMany({
            select: {
                id: true,
                amount: true,
                userId: true,
                serviceId: true,
                dueDate: true,
                createdAt: true,
                updatedAt: true
            }
        });

        if (bills.length === 0) {
            throw new NotFoundException("There are no bills found");
        }

        return bills;
    }

    // get user-specific bills
    async getUserBills(userId: string): Promise<BillResponseDto[]> {
        const bills = await this.prisma.bill.findMany({
            where: { userId },
            select: {
                id: true,
                amount: true,
                userId: true,
                serviceId: true,
                dueDate: true,
                status: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return bills;
    }

    // get single bill
    async getSingleBill(id: string): Promise<BillResponseDto> {

        const bill = await this.prisma.bill.findUnique({
            where: { id }
        })

        if (!bill) {
            throw new NotFoundException("the bill not found")
        }

        return bill as BillResponseDto
    }
}
