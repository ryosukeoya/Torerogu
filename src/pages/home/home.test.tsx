import React from 'react';
import Home from './index.p';
import { act, screen } from '@testing-library/react';
import { testRendererUsingApolloClientMock } from '~/tests/mocks/renders/testRendererUsingApolloClientMock';
import { getTrainingTrainingType, trainingTrainingType } from '~/tests/mocks/datum/graphql';
import { getStringTypeDate } from '~/utils';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));
jest.mock('~/components/Slider/useChangeSettingOnInWindowSize');
jest.mock('./SchedulePage', () => () => 'SchedulePage');

describe('Integration Test', () => {
  it('loading要素が表示され、データをフェッチし取得後pageが表示される', async () => {
    const renderPage = testRendererUsingApolloClientMock(<Home />, [getTrainingTrainingType(trainingTrainingType(getStringTypeDate(new Date())))]);
    renderPage();
    expect(screen.getByRole('loading'));
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByRole('page'));
  });

  it('本日の日付のトレーニングない場合、Empty State用の要素が表示される', async () => {
    const renderPage = testRendererUsingApolloClientMock(<Home />, [getTrainingTrainingType(trainingTrainingType('2022-06-01T14:59:59+00:00'))]);
    // const renderPage = testRendererUsingApolloClientMock(<Home />, [getTrainingTrainingType(trainingTrainingType('2022-06-01T15:00:00+00:00'))]);
    // const renderPage = testRendererUsingApolloClientMock(<Home />, [getTrainingTrainingType(trainingTrainingType('2022-06-01T23:59:59+09:00'))]);
    // const renderPage = testRendererUsingApolloClientMock(<Home />, [getTrainingTrainingType(trainingTrainingType('2022-06-02T00:00:00+09:00'))]);
    renderPage();
    expect(screen.getByRole('loading'));
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByRole('no-data'));
  });

  it('トレーニングのデータがない場合、Empty State用の要素が表示される', async () => {
    const renderPage = testRendererUsingApolloClientMock(<Home />, [getTrainingTrainingType([])]);
    renderPage();
    expect(screen.getByRole('loading'));
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByRole('no-data'));
  });
});
