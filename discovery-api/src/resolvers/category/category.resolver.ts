import {
  Resolver,
  Query,
  Subscription,
} from '@nestjs/graphql';
import { Category } from '../../models/category.model';
import { CategoryRepository } from './category.repository';

@Resolver((of) => Category)
export class CategoryResolver {
  constructor(private categoryRepository: CategoryRepository) {}

  @Query((returns) => [Category])
  async getCategories() {
    return this.categoryRepository.getAllCategoriesAndSubCategoriesWithProjects();
  }

}
