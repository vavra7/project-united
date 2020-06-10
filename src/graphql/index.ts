import { gql, makeExecutableSchema } from 'apollo-server';
import { typeDefs as User, resolvers as userResolvers } from './user';
import { typeDefs as Vehicle, resolvers as vehicleResolvers } from './vehicle';

const Query = gql`
  type Query {
    siteName: String!
  }
`;

const resolvers = {
  Query: {
    siteName: () => 'project-united',
    ...userResolvers,
    ...vehicleResolvers
  }
};

export const schema = makeExecutableSchema({
  typeDefs: [Query, User, Vehicle],
  resolvers
});
