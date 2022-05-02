import React from 'react';
import { act } from '@testing-library/react';
import { getTrainingOneTypeMock } from '~/tests/mocks/datum/getTrainingOneTypeMock';
import Home from '~/pages/home/index.p';
import { testRenderer } from '~/tests/mocks/renders';
import { trainingOneType } from '~/tests/mocks/datum/training';

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
    const renderPage = testRenderer(<Home />, [getTrainingOneTypeMock(trainingOneType)]);
    const { asFragment } = renderPage();
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
