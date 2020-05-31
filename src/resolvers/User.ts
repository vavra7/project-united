import { Resolver, Query } from 'type-graphql';
import "reflect-metadata";

@Resolver()
export class UserResolver {
  @Query(() => String)
  allUsers() {
    return 'hello';
  }
}
