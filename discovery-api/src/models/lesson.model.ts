import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { Project } from './project.model';
import { Resource } from './resource.model';
import { Challenge, LessonResource, Quest, Section } from './section.model';

export enum LessonEnum {
  BRANCHED = 'BRANCHED',
  DECRYPTED = 'DECRYPTED'
}

registerEnumType(LessonEnum, {
  name: 'LessonEnum',
  description: 'Branched = theorical lessons and Decrypted = technical hands on lessons',
});

@ObjectType()
export class Lesson extends BaseModel {
  name: string;
  sections:   Section[];
  type: LessonEnum;
  resources:  LessonResource[];
  quests:     Quest[];
  challenges: Challenge[];
  bounties:   string[];
  projectId?: string;
  project: Project;
}
