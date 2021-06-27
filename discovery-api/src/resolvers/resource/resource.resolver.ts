import { PrismaService } from '../../prisma/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { ResourceIdArgs } from '../../models/args/resource-id.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import {
  Resolver,
  Query,
  Parent,
  Args,
  ResolveField,
  Subscription,
  Mutation,
} from '@nestjs/graphql';
import { Resource } from '../../models/resource.model';
import { ResourceOrder } from '../../models/inputs/resource-order.input';
import { ResourceConnection } from 'src/models/pagination/resource-connection.model';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PubSub } from 'graphql-subscriptions/';
import { CreateResourceInput } from './dto/createResource.input';
import { UserEntity } from 'src/decorators/user.decorator';
import { User } from 'src/models/user.model';
import { GqlAuthGuard } from 'src/guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';

const pubSub = new PubSub();

@Resolver((of) => Resource)
export class ResourceResolver {
  constructor(private prisma: PrismaService) {}

  @Subscription((returns) => Resource)
  resourceCreated() {
    return pubSub.asyncIterator('resourceCreated');
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Resource)
  async createResource(
    @UserEntity() user: User,
    @Args('data') data: CreateResourceInput
  ) {
    const newResource = this.prisma.resource.create({
      data: {
        type: data.type,
        published: true,
        title: data.title,
        content: data.content,
        authorId: user.id,
      },
    });
    pubSub.publish('resourceCreated', { resourceCreated: newResource });
    return newResource;
  }

  @Query((returns) => ResourceConnection)
  async publishedResources(
    @Args() { skip, after, before, first, last }: PaginationArgs,
    @Args({ name: 'query', type: () => String, nullable: true })
    query: string,
    @Args({
      name: 'orderBy',
      type: () => ResourceOrder,
      nullable: true,
    })
    orderBy: ResourceOrder
  ) {
    const a = await findManyCursorConnection(
      (args) =>
        this.prisma.resource.findMany({
          include: { author: true },
          where: {
            published: true,
            title: { contains: query || '' },
          },
          orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : null,
          ...args,
        }),
      () =>
        this.prisma.resource.count({
          where: {
            published: true,
            title: { contains: query || '' },
          },
        }),
      { first, last, before, after }
    );
    return a;
  }

  @Query((returns) => [Resource])
  userResources(@Args() id: UserIdArgs) {
    return this.prisma.user
      .findUnique({ where: { id: id.userId } })
      .resources({ where: { published: true } });

    // or
    // return this.prisma.resources.findMany({
    //   where: {
    //     published: true,
    //     author: { id: id.userId }
    //   }
    // });
  }

  @Query((returns) => Resource)
  async resource(@Args() id: ResourceIdArgs) {
    return this.prisma.resource.findUnique({ where: { id: id.resourceId } });
  }

  @ResolveField('author')
  async author(@Parent() resource: Resource) {
    return this.prisma.resource.findUnique({ where: { id: resource.id } }).author();
  }
}
