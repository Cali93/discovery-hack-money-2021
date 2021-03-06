import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { Category } from './category.model';
import { Lesson } from './lesson.model';

@ObjectType()
class Token {
  id: string;
  name: string;
  symbol: string;
  tradeVolume: string
  priceUSDT?: string;
  pricewETH?: string;
}
@ObjectType()
export class Project extends BaseModel {
  name: string;
  description: string;
  website: string;
  isFeatured: boolean;
  twitter?: string;
  github?: string;
  logo?: string;
  lessons: Lesson[];
  categories: Category[];
  tokenId?: string;
  token?: Token;
}
