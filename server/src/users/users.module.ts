import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ViewsModule } from './views/views.module';
import { UsersController } from './users.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  providers: [UsersService],
  imports: [PrismaModule, ViewsModule],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}