import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";
import { SchemaLink } from 'apollo-link-schema';
import { schemaWithResolvers as schema } from './api/graphql'
import Link from 'next/link'

const USER_QUERY = gql`
  query {
    users {
      name
    }
  }
`;

const variables = {
  id: 1,
};

const Pes: React.FC = (props) => {
  return (
    <div>
      <Link href="/">
        <a>index</a>
      </Link>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

Pes.getInitialProps = async () => {
  console.log('------- HERE -------')
  const res = await fetch('http://dummy.restapiexample.com/api/v1/employees')
  const data = await res.json()

  return {
    start: data
  }
}

export default Pes;
