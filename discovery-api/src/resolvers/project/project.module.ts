import { PrismaModule } from '../../prisma/prisma.module';
import { ProjectResolver } from './project.resolver';
import { HttpModule, HttpService, Module } from '@nestjs/common';
import { EverestService } from '../../services/everest.service';

@Module({
  imports: [PrismaModule, HttpModule],
  providers: [ProjectResolver, EverestService],
})
export class ProjectModule {}
