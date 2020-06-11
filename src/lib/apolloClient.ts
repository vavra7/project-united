import { ApolloClient, ApolloClientOptions } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import getConfig from 'next/config';

const {
  serverRuntimeConfig: { gqlNetworkUrl },
  publicRuntimeConfig: { gqlPublicUrl }
} = getConfig();

let apolloClient: ApolloClient<any>;

const serverConfig: ApolloClientOptions<any> = {
  link: new HttpLink({
    uri: gqlNetworkUrl
  }),
  cache: new InMemoryCache(),
  ssrMode: true
};

const clientConfig: ApolloClientOptions<any> = {
  link: new HttpLink({
    uri: gqlPublicUrl
  }),
  cache: new InMemoryCache(),
  ssrMode: false
};

function initializeApolloClient(config: ApolloClientOptions<any>): ApolloClient<any> {
  return new ApolloClient(config);
}

export function getApolloClient(): ApolloClient<any> {
  const isServer: boolean = typeof window === 'undefined';
  const _apolloClient =
    apolloClient ?? initializeApolloClient(isServer ? serverConfig : clientConfig);

  return _apolloClient;
}
