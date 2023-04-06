import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { StatusesModule } from './statuses/statuses.module';
import { OrdersController } from './orders.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  providers: [OrdersService],
  imports: [StatusesModule, PrismaModule],
  controllers: [OrdersController]
})
export class OrdersModule {}
