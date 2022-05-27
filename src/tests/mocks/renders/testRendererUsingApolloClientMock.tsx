import type { ReactNode } from 'react';
import { GraphQLHandler, GraphQLRequest } from 'msw';
import { render } from '@testing-library/react';
import { server } from '../server';
import { InMemoryCache } from '@apollo/client';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { RecoilRoot } from 'recoil';

export const testRendererUsingApolloClientMock = (children: ReactNode, mocks?: ReadonlyArray<MockedResponse>) => (responseOverride?: GraphQLHandler<GraphQLRequest<never>>) => {
  if (responseOverride) {
    server.use(responseOverride);
  }

  return render(
    <RecoilRoot>
      <MockedProvider
        mocks={mocks}
        defaultOptions={{
          watchQuery: { fetchPolicy: 'no-cache' },
          query: { fetchPolicy: 'no-cache' },
        }}
        cache={new InMemoryCache({ resultCaching: false })}
        addTypename
      >
        {children}
      </MockedProvider>
    </RecoilRoot>,
    { baseElement: document.body },
  );
};
