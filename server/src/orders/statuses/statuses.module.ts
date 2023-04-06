import { Module } from '@nestjs/common';
import { StatusesService } from './statuses.service';

@Module({
  providers: [StatusesService]
})
export class StatusesModule {}
