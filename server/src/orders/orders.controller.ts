import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ParseDatePipe } from './parse-date.pipe';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    // Get up to 100 recent orders
    @Get()
    getOrders(): any {
      return this.ordersService.getOrders();
    }

    // Get order by month and year
    @Get("/month/:m")
    getOrdersByMonth(@Param('m', ParseDatePipe) month: Date): any {
      return this.ordersService.getOrdersByMonth(month);
    }

    // Get order by order number
    @Get(":id")
    getOrderByID(@Param('id', ParseIntPipe) orderNo: number): any {
      return this.ordersService.getOrderByID(orderNo);
    }
}
