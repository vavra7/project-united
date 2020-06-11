module.exports = {
  serverRuntimeConfig: {
    gqlNetworkUrl: process.env.GQL_NETWORK_URL || 'http://localhost:3000/api/graphql'
  },
  publicRuntimeConfig: {
    gqlPublicUrl: process.env.GQL_PUBLIC_URL || 'http://localhost:3000/api/graphql'
  }
};
