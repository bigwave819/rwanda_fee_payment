import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Req,
  UseGuards
} from '@nestjs/common';
import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { BillResponseDto } from './dto/bill-response.dto';
import { JwtAuthGuard } from 'src/common/Guards/jwt-auth.guard';

@Controller('bills')
@UseGuards(JwtAuthGuard)
export class BillsController {

  constructor(private readonly billsService: BillsService) { }


  @Post()
  async createBill(
    @Req() req,
    @Body() createBillDto: CreateBillDto
  ): Promise<BillResponseDto> {

    const userId = req.user.id;

    return this.billsService.createBill(userId, createBillDto);
  }

  @Get()
  async getAllBills(): Promise<BillResponseDto[]> {
    return this.billsService.getAllBills();
  }

  @Get('user')
  async getUserBills(
    @Req() req
  ): Promise<BillResponseDto[]> {
    const userId = req.user.id;
    return this.billsService.getUserBills(userId);
  }

  @Get(':id')
  async getSingleBill(
    @Param('id') id: string
  ): Promise<BillResponseDto> {

    return this.billsService.getSingleBill(id);
  }

}