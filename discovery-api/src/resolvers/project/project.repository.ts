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
import { Injectable, UseGuards } from '@nestjs/common';
import { Project } from '../../models/project.model';
import { PrismaService } from '../../prisma/prisma.service';
import { UniswapV2Service } from '../../services/uniswap-v2.service';

const pubSub = new PubSub();

@Injectable()
export class ProjectRepository {
  constructor(private prisma: PrismaService, private univ2: UniswapV2Service) {}
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
    const projectWithFormattedCategories = projects.map(p => ({
      ...p,
      categories: p.categories.map(({ category}) => category)
    }))

    const projectNames = projectWithFormattedCategories.map(p => p.name);
    const projectTokens = await this.univ2.getUniswapTokensByName(projectNames);
    console.log({ projectTokens })
    // get the token id name and symbol through the tokens query
    // getUniTokenIdByName
    return projectWithFormattedCategories;
  }
}
