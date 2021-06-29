import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';
import { BaseModel } from './base.model';
import { Category } from './category.model';
import { Decimal } from '@prisma/client/runtime';

@ObjectType()
class Token {
  id: string;
  name: string;
  symbol: string;
  tradeVolume: string
  priceUSDT: string;
}
@ObjectType()
export class Project extends BaseModel {
  name: string;
  description: string;
  website: string;
  twitter?: string;
  github?: string;
  logo?: string;
  categories: Category[];
  tokenId?: string;
  token?: Token;
}
