import {
  Field,
  ObjectType,
  registerEnumType,
  HideField,
} from '@nestjs/graphql';
import { Resource } from './resource.model';
import { BaseModel } from './base.model';

export enum Role {
  ADMIN = 'ADMIN',
  CREATOR = 'CREATOR',
  USER = 'USER',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {
  email: string;
  firstname?: string;
  lastname?: string;
  role: Role;
  resources: Resource[];
  @HideField()
  password: string;
}
