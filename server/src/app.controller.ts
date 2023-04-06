import { Controller, Get, Post, Body, UseGuards, Request, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGaurd } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService, private usersService: UsersService) {}

  @UseGuards(JwtAuthGaurd)
  @Post('login')
  async login(@Body('email') email: string) {

    // if user doesnt exist, create the User. User will be disabled by default until sysadmin manually enables.
    const userExists = !! await this.usersService.getUserByEmail(email);
    if (!userExists) {
      throw new HttpException('An account has been created for you using your email. Contact sysadmin so that your account can be enabled.', HttpStatus.UNAUTHORIZED);
    }

    // check to see if user is valid (created AND enabled).
    const user = await this.authService.validateUser(email);
    if (!user) {
      throw new HttpException('Your account has not yet been enabled. Contact sysadmin for more info.', HttpStatus.UNAUTHORIZED);
    }

    // Generate and return a JWT token
    const token = await this.authService.generateToken(user);
    return { token };

  }

  @Get()
  getHello(): object {
    return this.appService.getHello();
  }
}
