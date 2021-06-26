import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../../core/service/Prisma.service';

@Controller()
export class UserController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('/user')
  createUser() {
    return this.prismaService.user.create({
      data: {
        email: 'test.test@testmail.com',
        ethAddress: 'ifjhesfuihsuhxxjiuhdqu5454dzdz4d',
      },
    });
  }
}
