import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query((returns) => String)
  helloETHGlobal(): string {
    return 'Hello ETH Global!';
  }
  @Query((returns) => String)
  hello(@Args('name') name: string): string {
    return `Hello ${name}!`;
  }
}
