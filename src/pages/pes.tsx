import gql from 'graphql-tag';
import Link from 'next/link';

const USER_QUERY = gql`
  query {
    users {
      name
    }
  }
`;

const variables = {
  id: 1
};

const Pes: React.FC = props => {
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
  const res = await fetch('http://dummy.restapiexample.com/api/v1/employees');
  const data = await res.json();

  return {
    start: data
  };
};

export default Pes;
