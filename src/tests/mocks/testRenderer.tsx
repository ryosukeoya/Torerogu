import React from 'react';
import { GraphQLHandler, GraphQLRequest } from 'msw';
import { ApolloProvider } from '@apollo/client';
import { render } from '@testing-library/react';
import { server } from './server';
import { initializeApollo } from '~/libs/graphql/apolloClient';

/**
 * 
 */
export const testRenderer = (children: React.ReactNode) => (responseOverride?: GraphQLHandler<GraphQLRequest<never>>) => {
  const client = initializeApollo();

  if (responseOverride) {
    server.use(responseOverride);
  }
  render(<ApolloProvider client={client}>{children}</ApolloProvider>);
};
