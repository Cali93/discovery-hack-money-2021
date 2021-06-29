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
import { Category } from '../../models/category.model';
import { EverestService } from '../../services/everest.service';
import { CategoryRepository } from './category.repository';

const pubSub = new PubSub();

@Resolver((of) => Category)
export class CategoryResolver {
  constructor(private categoryRepository: CategoryRepository) {}

  @Subscription((returns) => Category)
  categoryCreated() {
    return pubSub.asyncIterator('categoryCreated');
  }

  // @UseGuards(GqlAuthGuard)
  @Query((returns) => [Category])
  async getCategories(
    // @UserEntity() user: User,
    // @Args('data') data: CreateCategoryInput
  ) {
    // pubSub.publish('categoryCreated', { categoryCreated: newCategory });
    return this.categoryRepository.getAllCategoriesAndSubCategoriesWithProjects();
  }

}
