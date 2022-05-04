import type { ReactNode } from 'react';
import { GraphQLHandler, GraphQLRequest } from 'msw';
import { render } from '@testing-library/react';
import { server } from '../server';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { initializeApollo } from '~/libs/graphql/apolloClient';

export const testRenderer = (children: ReactNode) => (responseOverride?: GraphQLHandler<GraphQLRequest<never>>) => {
  if (responseOverride) {
    server.use(responseOverride);
  }
  const client = initializeApollo();

  return render(
    <RecoilRoot>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </RecoilRoot>,
  );
};
