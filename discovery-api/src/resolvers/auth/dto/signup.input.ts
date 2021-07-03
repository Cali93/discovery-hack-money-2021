import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PersonInput {
  @Field()
  nickname?: string;
  @Field()
  firstname?: string;
  @Field()
  lastname?: string;
  @Field()
  title?: string;
  @Field()
  twitter?: string;
}

@InputType()
export class SignupInput {
  @Field(()=> [String!])
  ethAddresses?: string[];
}
