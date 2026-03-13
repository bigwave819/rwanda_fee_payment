import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateService } from './dto/create-service.dto';
import { UpdateService } from './dto/update-service.dto';

@Controller('services')
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createServiceDto: CreateService) {
        return await this.servicesService.createService(createServiceDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAllServices() {
        return await this.servicesService.getAllServices();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getSingleService(
        @Param('id') id: string,
    ) {
        return await this.servicesService.getSingleService(id);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateService(
        @Param('id') id: string,
        @Body() updateServiceDto: UpdateService
    ) {
        return await this.servicesService.updateService(id, updateServiceDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async remove(
        @Param('id') id: string
    ) {
        return await this.servicesService.deleteService(id);
    }
}