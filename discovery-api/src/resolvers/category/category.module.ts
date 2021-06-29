import { PrismaModule } from '../../prisma/prisma.module';
import { CategoryResolver } from './category.resolver';
import { HttpModule, HttpService, Module } from '@nestjs/common';
import { CategoryRepository } from './category.repository';

@Module({
  imports: [PrismaModule, HttpModule],
  providers: [CategoryResolver, CategoryRepository],
})
export class CategoryModule {}
