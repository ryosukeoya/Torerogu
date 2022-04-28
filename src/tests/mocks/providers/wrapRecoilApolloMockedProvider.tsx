import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

type Mocks = ReadonlyArray<MockedResponse>;
type WrapMockedProviderArg = { ui: React.ReactElement; mocks?: Mocks };

export const wrapRecoilApolloMockedProvider = (wrapMockedProviderArg: WrapMockedProviderArg) => {
  const { mocks, ui } = wrapMockedProviderArg;
  return render(
    <RecoilRoot>
      <MockedProvider mocks={mocks} addTypename={false}>
        {ui}
      </MockedProvider>
    </RecoilRoot>,
  );
};
