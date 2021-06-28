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
import { ProjectRepository } from './project.repository';

const pubSub = new PubSub();

@Resolver((of) => Project)
export class ProjectResolver {
  constructor(private projectRepository: ProjectRepository) {}

  @Subscription((returns) => Project)
  projectCreated() {
    return pubSub.asyncIterator('projectCreated');
  }

  // @UseGuards(GqlAuthGuard)
  @Query((returns) => [Project])
  async getDeFiProjects() {
    const projects = await this.projectRepository.getDeFiProjects();
    return projects;
  }
}
