import { ObjectType } from '@nestjs/graphql';
import { User } from './user.model';
import { AuthToken } from './token.model';

@ObjectType()
export class Auth extends AuthToken {
  user: User;
}
