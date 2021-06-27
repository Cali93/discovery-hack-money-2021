import {
  Field,
  ObjectType,
} from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { Project } from './project.model';
import { User } from './user.model';

@ObjectType()
export class Person extends BaseModel {
  nickname?: string;
  firstname?: string;
  lastname?: string;
  title?: string;
  twitter?: string;
  projects?: Project[]
  user?: User[]
}
