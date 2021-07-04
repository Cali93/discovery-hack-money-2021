import { PubSub } from 'graphql-subscriptions/';
import { Injectable, UseGuards } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UniswapV2Service } from '../../services/uniswap-v2.service';
import { BrandfetchService } from '../../services/brandfetch.service';

const pubSub = new PubSub();

@Injectable()
export class ProjectRepository {
  constructor(private prisma: PrismaService, private univ2: UniswapV2Service, private brandfetch: BrandfetchService) {}
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

    const tokenIds = projectWithFormattedCategories.filter(p => p.tokenId).map(p => p.tokenId);
    const projectsWithTokenPrice = await this.univ2.getUniswapTokensPairs(tokenIds);
    const projectsWithTokenData = projectWithFormattedCategories.map(project => {
      const projectTokenDetails = projectsWithTokenPrice.find(pair => pair.token0.id === project.tokenId)
      if (!projectTokenDetails) return project;
      return {
        ...project,
        token: {
          id: projectTokenDetails.token0.id,
          name: projectTokenDetails.token0.name,
          symbol: projectTokenDetails.token0.symbol,
          tradeVolume: projectTokenDetails.token0.tradeVolume,
          priceUSDT: projectTokenDetails.token1Price
        }
      }
    })
    return projectsWithTokenData;
  }
  async getProjectById(id: string) {
    const project = await this.prisma.project.findFirst({
      where: {
        id
      },
      include: {
        categories: {
          include: {
            category: true
          }
        },
        lessons: {
          include: {
            challenges: true,
            resources: true,
            quests: true,
            sections: true
          }
        },
        competitors: true
      }
    })
    if (!project){
      return null;
    }
    const projectWithFormattedCategories = {
      ...project,
      categories: project.categories.map(({ category}) => category)
    }

    if (projectWithFormattedCategories.tokenId){
      const is88mph = projectWithFormattedCategories.name === '88mph';
      const projectWithTokenPrice = await this.univ2.getUniswapTokensPairs([projectWithFormattedCategories.tokenId], is88mph ? 'Wrapped Ether' : 'Tether');
      console.log({ tId: projectWithFormattedCategories.tokenId, projectWithTokenPrice})
      // const projectLogo = await this.brandfetch.getProjectLogo(projectWithFormattedCategories.website)
      const projectTokenDetails = projectWithTokenPrice.find(pair => pair.token0.id === project.tokenId)
      console.log({projectTokenDetails})
      if (!projectTokenDetails) return project;
      return {
        ...project,
        // logo: projectLogo,
        token: {
          id: projectTokenDetails.token0.id,
          name: projectTokenDetails.token0.name,
          symbol: projectTokenDetails.token0.symbol,
          tradeVolume: projectTokenDetails.token0.tradeVolume,
          [is88mph ? 'pricewETH' : 'priceUSDT']: projectTokenDetails.token1Price,
        }
      }

    }
    return project;
  }
}
