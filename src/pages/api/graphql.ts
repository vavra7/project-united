import { ApolloServer } from 'apollo-server-micro';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import { loadSchemaSync } from '@graphql-tools/load';
import { schema } from '../../graphql';
// import { schemaWithResolvers } from '../../graphql';

export const config = {
  api: {
    bodyParser: false
  }
};

export default new ApolloServer({ schema }).createHandler({
  path: '/api/graphql'
});
