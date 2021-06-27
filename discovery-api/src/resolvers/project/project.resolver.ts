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
import { PrismaService } from '../../prisma/prisma.service';

const pubSub = new PubSub();

@Resolver((of) => Project)
export class ProjectResolver {
  constructor(private prisma: PrismaService) {}

  @Subscription((returns) => Project)
  projectCreated() {
    return pubSub.asyncIterator('projectCreated');
  }

  // @UseGuards(GqlAuthGuard)
  @Query((returns) => [Project])
  async getDeFiProjects() {
    const projects = await this.prisma.project.findMany({
      where: {
        categories: {
          some: {
            category:{
              name: {
                contains: 'DeFi'
              }
            }
          }
        }
      },
      include: {
        categories: {
          include: {
            category: true
          }
        },
        competitors: true
      }
    })
    return projects.map(p => ({
      ...p,
      categories: p.categories.map(({ category}) => category)
    }))
  }
}
