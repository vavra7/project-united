import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    user: User
  }

  type User {
    id: String!
    name: String!
  }
`;

export const resolvers = {
  user: () => ({ id: 'some_id', name: 'user' })
};
