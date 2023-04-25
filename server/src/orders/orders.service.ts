import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { addMonths } from 'date-fns';
import _, { map } from 'underscore';

@Injectable()
export class OrdersService {
    constructor(private prismaService: PrismaService) { }

    getOrders() {
        return this.prismaService.order.findMany({
            orderBy: [{
                dueAt: 'asc'
            }],
            include: {
                customer: true,
                statusEntries: {
                    include: {
                        status: {
                            select: {
                                displayColor: true
                            }
                        }
                    }
                }
            },
            take: 100
        });
    }

    getOrdersByMonth(month: Date) {
        return this.prismaService.order.findMany({
            where: {
                dueAt: {
                    lt: addMonths(month, 1).toISOString(), // "2022-01-30T00:00:00.000Z"
                    gte: month.toISOString(),
                }
            },
            orderBy: [{
                dueAt: 'asc' // oldest to newest
            }],
            include: {
                customer: true,
                statusEntries: {
                    include: {
                        status: {
                            select: {
                                displayColor: true
                            }
                        }
                    }
                }
            }
        });
    }

    getOrderByID(orderNo: number): any {
        return this.prismaService.order.findFirst({
            where: {
                orderNo
            },
            include: {
                customer: true,
                statusEntries: {
                    include: {
                        status: true
                    },
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                items: {
                    include: {
                        job: {
                            include: {
                                prices: {
                                    select: {
                                        quantity: true,
                                        cost: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    }
}
