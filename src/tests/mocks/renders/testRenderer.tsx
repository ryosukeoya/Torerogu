import React from 'react';
import { GraphQLHandler, GraphQLRequest } from 'msw';
import { render } from '@testing-library/react';
import { server } from '../server';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { RecoilRoot } from 'recoil';

export const testRenderer = (children: React.ReactNode, mocks: ReadonlyArray<MockedResponse>) => (responseOverride?: GraphQLHandler<GraphQLRequest<never>>) => {
  if (responseOverride) {
    server.use(responseOverride);
  }

  render(
    <RecoilRoot>
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    </RecoilRoot>,
  );
};
