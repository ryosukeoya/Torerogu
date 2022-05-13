import { VFC, ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ApolloProvider } from '@apollo/client';
import { initializeApollo } from '../libs/graphql/apolloClient';

type Props = {
  children: ReactNode;
};

export const ApolloProviderWithAuth0Token: VFC<Props> = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();

  const client = initializeApollo(getAccessTokenSilently);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
