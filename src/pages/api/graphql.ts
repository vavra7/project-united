import { Resolver, Query } from "type-graphql";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema } from "type-graphql";
import "reflect-metadata";

@Resolver()
class HelloResolver {
  @Query(() => String)
  hello() {
    return "hello";
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  return apolloServer.createHandler({ path: "/api/graphql" });
})();
