import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentStatusDto } from './dto/update-payment-status.dto';

@Injectable()
export class PaymentsService {
    constructor(private prisma: PrismaService) { }

    async createPayment(userId: string, createPaymentDto: CreatePaymentDto) {
        const bill = await this.prisma.bill.findUnique({
            where: { id: createPaymentDto.billId }
        });

        if (!bill) {
            throw new NotFoundException('Bill not found');
        }

        const payment = await this.prisma.payment.create({
            data: {
                userId,
                billId: bill.id,
                amount: bill.amount,
                status: 'PENDING'
            }
        });

        return payment;
    }

    async updatePaymentStatus(id: string, updatePaymentStatusDto: UpdatePaymentStatusDto) {
        const payment = await this.prisma.payment.findUnique({ where: { id } });
        if (!payment) {
            throw new NotFoundException('Payment not found');
        }

        const updatedPayment = await this.prisma.payment.update({
            where: { id },
            data: { status: updatePaymentStatusDto.status }
        });

        if (updatePaymentStatusDto.status === 'COMPLETED') {
            await this.prisma.bill.update({
                where: { id: payment.billId },
                data: { status: 'PAID' }
            });
        }

        return updatedPayment;
    }
}
