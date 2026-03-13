import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateService } from './dto/create-service.dto';
import { UpdateService } from './dto/update-service.dto';
import { ServiceResponseDto } from './dto/service-response.dto';

@Injectable()
export class ServicesService {
    constructor(private prisma: PrismaService) {}

    //create the service
    async createService(
        createServiceDto: CreateService
    ): Promise<ServiceResponseDto> {
        const { name, description } = createServiceDto;

        const service = await this.prisma.service.create({
            data: {
                name,
                description
            },
            select: {
                id: true,
                name: true,
                description: true,
                createdAt: true,
                updatedAt: true
            },
        });

        return service as ServiceResponseDto;
    }

    //get all services
    async getAllServices(): Promise<ServiceResponseDto[]> {
        const services = await this.prisma.service.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                createdAt: true,
                updatedAt: true
            }
        });

        if (services.length === 0) {
            throw new NotFoundException('There are no services right now');
        }

        return services as ServiceResponseDto[];
    }

    //get Single Service
    async getSingleService(
        serviceId: string
    ): Promise<ServiceResponseDto> {
        const service = await this.prisma.service.findUnique({
            where: { id: serviceId },
            select: {
                id: true,
                name: true,
                description: true,
                createdAt: true,
                updatedAt: true
            }
        });

        if (!service) {
            throw new NotFoundException("The service not found");
        }

        return service as ServiceResponseDto;
    }

    // update service
    async updateService(
        id: string,
        updateServiceDto: UpdateService,
    ): Promise<ServiceResponseDto> {
        const existingService = await this.prisma.service.findUnique({
            where: { id }
        });

        if (!existingService) {
            throw new NotFoundException("Service not found");
        }

        const updatedService = await this.prisma.service.update({
            where: { id },
            data: {
                ...updateServiceDto
            },
            select: {
                id: true,
                name: true,
                description: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return updatedService as ServiceResponseDto;
    }

    // delete Service
    async deleteService(
        serviceId: string,
    ): Promise<{ message: string }> {
        // First check if service exists
        const existingService = await this.prisma.service.findUnique({
            where: { id: serviceId }
        });

        if (!existingService) {
            throw new NotFoundException('Service not found');
        }

        await this.prisma.service.delete({
            where: { id: serviceId }
        });

        return { message: 'Service deleted successfully' };
    }
}