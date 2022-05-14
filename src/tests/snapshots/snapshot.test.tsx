import React from 'react';
import { act } from '@testing-library/react';
import Home from '~/pages/home/index.p';
import { testRendererUsingApolloClientMock } from '~/tests/mocks/renders';
import { trainingOneType, getTrainingOneTypeMock } from '~/tests/mocks/datum/graphql/getTrainingOneTypeMock';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));
jest.mock('../../components/PageSlider/useChangeSettingOnInWindowSize');
jest.mock('../../pages/home/SchedulePage', () => () => 'SchedulePage');

describe('Snap shot', () => {
  it('ホームページのDOM要素の出力が変わっていない', async () => {
    const renderPage = testRendererUsingApolloClientMock(<Home />, [getTrainingOneTypeMock(trainingOneType)]);
    const { asFragment } = renderPage();
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
