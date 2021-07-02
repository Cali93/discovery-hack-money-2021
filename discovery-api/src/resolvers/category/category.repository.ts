
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CategoryRepository {
  constructor(private prisma: PrismaService) { }
  async getAllCategoriesAndSubCategoriesWithProjects() {
    return this.prisma.category.findMany({
      where: {
        parentCategoryId: null,
      },
      include: {
        subcategories: {
          include: {
            subcategories: true,
            projects: true
          }
        },
        projects: {
          include: {
            project: true
          }
        }
      }
    }).then(categories => categories.map(
      ({ projects, ...category }) => ({
        ...category,
        projects: projects.map(projectCategory => projectCategory.project)
      })
    ));
  }
}
