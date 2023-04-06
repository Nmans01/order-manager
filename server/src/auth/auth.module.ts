import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JWTStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService, JWTStrategy],
  imports: [UsersModule, PassportModule, JwtModule]
})
export class AuthModule {}
