import { Get, Post, Controller, Param, Body, ParseUUIDPipe, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { JwtAuthGaurd } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // @UseGuards(JwtAuthGaurd)
    @Get()
    getUsers(): any {
      return this.usersService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string): object {
        return this.usersService.getUserByID(id);
    }

    @Post('create')
    createUser(@Body() body: User) {
        return this.usersService.createUser(body);
    }

    @Post('update')
    updateUser(@Body() body: User) {
        return this.usersService.updateUser(body);
    }

    @Post('disable')
    disableUser(@Body() id: string) {
        return this.usersService.disableUser(id);
    }
}