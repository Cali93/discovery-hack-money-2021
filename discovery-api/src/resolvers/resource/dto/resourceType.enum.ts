import { registerEnumType } from '@nestjs/graphql';

export enum ResourceTypeEnum {
    WORKSHOP = 'WORKSHOP',
    CONFTALK = 'CONFTALK',
    TUTORIAL =  'TUTORIAL',
    ARTICLE = 'ARTICLE',
    REVIEW = 'REVIEW',
    INTERVIEW = 'INTERVIEW',
    PODCAST = 'PODCAST'
}

registerEnumType(ResourceTypeEnum, {
  name: 'ResourceTypeEnum',
  description:
    'The types of resources provided for the projects and the lessons',
});
