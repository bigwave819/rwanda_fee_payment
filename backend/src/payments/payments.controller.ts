import { Body, Controller, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from 'src/common/Guards/jwt-auth.guard';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentStatusDto } from './dto/update-payment-status.dto';

@Controller('payments')
@UseGuards(JwtAuthGuard)
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) { }

    @Post()
    async createPayment(@Req() req, @Body() createPaymentDto: CreatePaymentDto) {
        return this.paymentsService.createPayment(req.user.id, createPaymentDto);
    }

    @Patch(':id/status')
    async updatePaymentStatus(
        @Param('id') id: string,
        @Body() updatePaymentStatusDto: UpdatePaymentStatusDto
    ) {
        return this.paymentsService.updatePaymentStatus(id, updatePaymentStatusDto);
    }
}
