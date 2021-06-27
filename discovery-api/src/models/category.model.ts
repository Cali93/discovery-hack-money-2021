import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { Project } from './project.model';

@ObjectType()
export class Category extends BaseModel {
  description: string
  name: string
  slug: string
  projects: Project[]
  subcategories?: Category[]
  parentCategory: Category
  projectCount: number
}
