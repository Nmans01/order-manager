import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class OrdersService {
    constructor(private prismaService: PrismaService) {}

    getOrdersWithClients() {
        return this.prismaService.order.findMany({
            include: {
                customer: true
            }
        });
    }
}
