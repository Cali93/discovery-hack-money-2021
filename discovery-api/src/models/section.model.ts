import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';

@ObjectType()
export class Section extends BaseModel {
  title: string;
  content:   string;
}
@ObjectType()
export class Quest extends BaseModel {
  title: string;
  content:   string;
}
@ObjectType()
export class Challenge extends BaseModel {
  title: string;
  content:   string;
}
@ObjectType()
export class LessonResource extends BaseModel {
  title: string;
  content:   string;
}
