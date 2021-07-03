import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LogoutInput {
  @Field(() => [String])
  ethAddresses: string[];

  @Field()
  accessToken: string;
}
