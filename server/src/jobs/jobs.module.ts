import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { PricesModule } from './prices/prices.module';

@Module({
  providers: [JobsService],
  imports: [PricesModule]
})
export class JobsModule {}
