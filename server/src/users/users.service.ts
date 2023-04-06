import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    getUsers() {
        return this.prisma.user.findMany();
    }

    getUserByID(id: string) {
        return this.prisma.user.findFirst({
            where: {id}
        });
    }

    getUserByEmail(email: string) {
        return this.prisma.user.findFirst({
            where: {email},
        })
    }

    createUser(user: User) {
        return this.prisma.user.upsert({
            where: {
                email: user.email
            },
            update: {
                crudInfo: {
                    enabled: true
                },
            },
            create: user
        });
    }

    updateUser(user: User) {
        return this.prisma.user.update({
            where: {
                id: user.id
            },
            data: user
        });
    }

    disableUser(id: string) {
        return this.prisma.user.update({
            where: {
                id
            },
            data: {
                crudInfo: {
                    enabled: false
                }
            }
        });
    }
}
