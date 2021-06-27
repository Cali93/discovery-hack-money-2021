import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  ethAddress?: string;
  @Field({ nullable: true })
  ens?: string;
}
