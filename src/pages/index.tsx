import gql from 'graphql-tag';
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
  const a = 'adsf';

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

export default index;
