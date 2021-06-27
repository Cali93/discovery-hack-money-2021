import { IsEnum, IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { ResourceTypeEnum } from './resourceType.enum';

@InputType()
export class CreateResourceInput {
  @Field()
  @IsNotEmpty()
  content: string;
  @Field({ defaultValue: false })
  @IsNotEmpty()
  published: boolean;
  @Field()
  @IsNotEmpty()
  title: string;
  @Field()
  @IsEnum(ResourceTypeEnum)
  type: ResourceTypeEnum
}
