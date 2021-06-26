import { Module } from '@nestjs/common';
import { PrismaService } from '../../core/service/Prisma.service';
import { UserController } from './controller/user.controller';

@Module({
  controllers: [UserController],
  providers: [PrismaService],
})
export class UserModule {}
