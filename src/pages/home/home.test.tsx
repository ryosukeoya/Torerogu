import React from 'react';
import Home from './index.p';
import { act, screen } from '@testing-library/react';
import { testRendererUsingApolloClientMock } from '~/tests/mocks/renders/testRendererUsingApolloClientMock';
import { trainingOneType, getTrainingOneTypeMock } from '~/tests/mocks/datum/graphql/getTrainingOneTypeMock';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));
jest.mock('~/components/PageSlider/useChangeSettingOnInWindowSize');
jest.mock('./SchedulePage', () => () => 'SchedulePage');

describe('Integration Test', () => {
  it('loading要素が表示され、データをフェッチし取得後pageが表示される', async () => {
    const renderPage = testRendererUsingApolloClientMock(<Home />, [getTrainingOneTypeMock(trainingOneType)]);
    renderPage();
    expect(screen.getByTestId('loading'));
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByTestId('page'));
    // screen.debug();
  });

  it('データがない場合、Empty State用の要素が表示される(data-testid:no-data)', async () => {
    const renderPage = testRendererUsingApolloClientMock(<Home />, [getTrainingOneTypeMock([])]);
    renderPage();
    expect(screen.getByTestId('loading'));
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByTestId('no-data'));
    // screen.debug();
  });
});
