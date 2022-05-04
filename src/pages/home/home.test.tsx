import React from 'react';
import Home from './index.p';
import { act, screen } from '@testing-library/react';
import { testRendererUsingApolloClientMock } from '~/tests/mocks/renders/testRendererUsingApolloClientMockUsingApolloClientMock';
import { getTrainingOneTypeMock } from '~/tests/mocks/datum/getTrainingOneTypeMock';
import { trainingOneType } from '~/tests/mocks/datum/training';

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
  it('loading画面表示され、データをフェッチし取得後pageがレンダリングされる', async () => {
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
