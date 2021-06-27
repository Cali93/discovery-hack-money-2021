import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';
import { BaseModel } from './base.model';
import { Category } from './category.model';

@ObjectType()
export class Project extends BaseModel {
  name: string
  description: string
  website: string
  twitter?: string
  github?: string
  logo?: string
  categories: Category[]
}
