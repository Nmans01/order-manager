import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  users() {
    return this.prisma.user.findMany();
  }

  jobs() {
    return this.prisma.job.findMany();
  }

  prices() {
    return this.prisma.price.findMany();
  }
}
