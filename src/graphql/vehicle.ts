import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    vehicle: Vehicle
  }

  type Vehicle {
    name: String!
  }
`;

export const resolvers = {
  vehicle: () => ({ name: 'vehicle' })
}