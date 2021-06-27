import {
  Resolver,
  Query,
  Parent,
  Args,
  ResolveField,
  Subscription,
  Mutation,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions/';
import { GqlAuthGuard } from 'src/guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Project } from '../../models/project.model';
import { EverestService } from '../../services/everest.service';

const pubSub = new PubSub();

@Resolver((of) => Project)
export class ProjectResolver {
  constructor(private everest: EverestService) {}

  @Subscription((returns) => Project)
  projectCreated() {
    return pubSub.asyncIterator('projectCreated');
  }

  // @UseGuards(GqlAuthGuard)
  @Query((returns) => [Project])
  async getDeFiProjects() {
    return this.everest.getDeFiProjects();
  }
}
