import { PrismaModule } from '../../prisma/prisma.module';
import { CategoryResolver } from './category.resolver';
import { HttpModule, HttpService, Module } from '@nestjs/common';
import { EverestService } from '../../services/everest.service';

@Module({
  imports: [PrismaModule, HttpModule],
  providers: [CategoryResolver, EverestService],
})
export class CategoryModule {}
