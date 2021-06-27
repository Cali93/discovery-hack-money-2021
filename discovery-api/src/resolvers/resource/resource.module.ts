import { PrismaModule } from '../../prisma/prisma.module';
import { ResourceResolver } from './resource.resolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [ResourceResolver],
})
export class ResourceModule {}
