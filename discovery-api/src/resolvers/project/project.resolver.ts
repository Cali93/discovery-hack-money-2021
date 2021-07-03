import {
  Resolver,
  Query,
  Args,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions/';
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

  @Query((returns) => [Project])
  async getDeFiProjects() {
    const projects = await this.projectRepository.getDeFiProjects();
    return projects;
  }
  @Query((returns) => Project, { nullable: true })
  async getProjectById(
    @Args('id') id: string
  ) {
    return this.projectRepository.getProjectById(id);
  }
}
