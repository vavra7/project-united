import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { SchemaLink } from 'apollo-link-schema';
// import { schemaWithResolvers as schema } from '../graphql';
import { schema } from '../graphql';
// import { schema } from '../graphql';
import Link from 'next/link';
import { getApolloClient } from '../lib/apolloClient';

const USER_QUERY = gql`
  query {
    user {
      name
    }
  }
`;

const variables = {
  id: 1
};

const index: React.FC = props => {
  return (
    <div>
      <Link href="/pes">
        <a>pes</a>
      </Link>

      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

index.getInitialProps = async ({ req }) => {
  const apolloClient = getApolloClient();

  await apolloClient!.query({
    query: USER_QUERY
  });

  return { cache: apolloClient!.cache.extract() };
};

// export async function getStaticProps() {
//   const apolloClient = getApolloClient()

//   await apolloClient!.query({
//     query: USER_QUERY
//   });

//   return {
//     props: {
//       cache: apolloClient!.cache.extract(),
//     },
//   };
// }

export default index;
