import { Module } from '@nestjs/common';
import { PrismaService } from './core/service/Prisma.service';
import { UserModule } from './entities/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
