import React from 'react';
import { render, act } from '@testing-library/react';
import { InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { RecoilRoot } from 'recoil';
import { getTrainingOneTypeMock } from '~/tests/mocks/datum/getTrainingOneTypeMock';
import Home from '~/pages/home/index.p';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));
jest.mock('../../components/PageSlider/useChangeSettingOnInWindowSize');
jest.mock('../../pages/home/SchedulePage', () => () => 'SchedulePage');

describe('<Home>', () => {
  it('ホームページのDOM要素の出力が変わっていない', async () => {
    const { asFragment } = render(
      <RecoilRoot>
        <MockedProvider
          mocks={[getTrainingOneTypeMock]}
          defaultOptions={{
            watchQuery: { fetchPolicy: 'no-cache' },
            query: { fetchPolicy: 'no-cache' },
          }}
          cache={new InMemoryCache({ resultCaching: false })}
          addTypename
        >
          <Home />
        </MockedProvider>
      </RecoilRoot>,
    );
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
