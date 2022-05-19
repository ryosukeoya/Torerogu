import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import 'cross-fetch/polyfill';
import { setContext } from '@apollo/client/link/context';
import type { GetTokenSilentlyOptions } from '@auth0/auth0-react';

type GetAccessTokenSilently = (options?: GetTokenSilentlyOptions | undefined) => Promise<string>;
let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = (getAccessTokenSilently?: GetAccessTokenSilently, ACCESS_TOKEN?: string) => {
  const authLink = setContext(async (_, { headers }) => {
    if (ACCESS_TOKEN) {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      };
    } else if (getAccessTokenSilently) {
      const accessToken = await getAccessTokenSilently();
      // console.warn(accessToken);
      if (!accessToken) {
        return { headers };
      }
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${accessToken}`,
        },
      };
    } else {
      return { headers };
    }
  });

  const link = authLink.concat(
    new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    }),
  );

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (getAccessTokenSilently?: GetAccessTokenSilently, ACCESS_TOKEN?: string) => {
  const _apolloClient = apolloClient ?? createApolloClient(getAccessTokenSilently, ACCESS_TOKEN);
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};
