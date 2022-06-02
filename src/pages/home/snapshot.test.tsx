import React from 'react';
import { act } from '@testing-library/react';
import Home from '~/pages/home/index.p';
import { testRendererUsingApolloClientMock } from '~/tests/mocks/renders';
import { getTrainingTrainingType, trainingTrainingType } from '~/tests/mocks/datum/graphql';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));
jest.mock('../../components/Slider/useChangeSettingOnInWindowSize');
jest.mock('./SchedulePage', () => () => 'SchedulePage');

describe('Snapshot Test', () => {
  it('ホームページのDOM要素の出力が変わっていない', async () => {
    const renderPage = testRendererUsingApolloClientMock(<Home />, [getTrainingTrainingType(trainingTrainingType('2022-06-01T00:00:00+00:00'))]);
    const { asFragment } = renderPage();
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
