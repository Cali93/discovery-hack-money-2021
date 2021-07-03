import { Auth } from '../../models/auth.model';
import { AuthToken } from '../../models/token.model';
import { LoginInput } from './dto/login.input';
import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
  Int,
} from '@nestjs/graphql';
import { AuthService } from '../../services/auth.service';
import { SignupInput } from './dto/signup.input';
import { LogoutInput } from './dto/logout.input';

@Resolver((of) => Auth)
export class AuthResolver {
  constructor(private readonly auth: AuthService) {}

  @Mutation((returns) => Auth)
  async signup(@Args('data') data: SignupInput) {
    const { accessToken, refreshToken } = await this.auth.createUser(data.ethAddresses);
    return {
      accessToken,
      refreshToken,
    };
  }

  @Mutation((returns) => Auth)
  async login(@Args('data') { ethAddresses }: SignupInput) {
    console.log({ethAddresses});
    const { accessToken, refreshToken } = await this.auth.login(ethAddresses);

    return {
      accessToken,
      refreshToken,
    };
  }
  @Mutation((returns) => Int)
  async logout(@Args('data') { ethAddresses, accessToken }: LogoutInput) {
    return this.auth.logout(ethAddresses, accessToken);
  }
  @Mutation((returns) => Int)
  async deleteUser(@Args('data') { ethAddresses, accessToken }: LogoutInput) {
    return this.auth.deleteUser(ethAddresses, accessToken);
  }

  @Mutation((returns) => AuthToken)
  async refreshToken(@Args('token') token: string) {
    return this.auth.refreshToken(token);
  }

  @ResolveField('user')
  async user(@Parent() auth: Auth) {
    return await this.auth.getUserFromToken(auth.accessToken);
  }
}
