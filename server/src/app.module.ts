import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { ClientsModule } from './clients/clients.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    PrismaModule.forRoot(), 
    UsersModule, 
    JobsModule, 
    ClientsModule, 
    OrdersModule, 
    AuthModule,
    PassportModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '5m' },
    })
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
