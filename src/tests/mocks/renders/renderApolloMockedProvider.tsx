import { render } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

type Mocks = ReadonlyArray<MockedResponse>;
type WrapMockedProviderArg = { ui: React.ReactElement; mocks?: Mocks };

export const renderApolloMockedProvider = (wrapMockedProviderArg: WrapMockedProviderArg) => {
  const { mocks, ui } = wrapMockedProviderArg;
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      {ui}
    </MockedProvider>,
  );
};
