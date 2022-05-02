import React from 'react';
import Home from './index.p';
import { act, screen } from '@testing-library/react';
import { testRenderer } from '~/tests/mocks/renders/testRenderer';
import { getTrainingOneTypeMock } from '~/tests/mocks/datum/getTrainingOneTypeMock';
import { GetTrainingOneTypeDocument } from '~/libs/graphql/generated/graphql';
import { getStringTypeDate } from '~/utils/app';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));
jest.mock('../../components/PageSlider/useChangeSettingOnInWindowSize');
jest.mock('./SchedulePage', () => () => 'SchedulePage');

describe('<Home>', () => {
  it('loading画面表示され、データをフェッチし取得後pageがレンダリングされる', async () => {
    const renderPage = testRenderer(<Home />, [getTrainingOneTypeMock]);
    await act(async () => {
      renderPage();
      expect(screen.findByTestId('loading'));
      await new Promise((resolve) => setTimeout(resolve, 0));
      expect(await screen.findByTestId('page'));
      // screen.debug();

      // pattern2
      // renderPage();
      // expect(screen.findByTestId('loading'));
      // await waitForElementToBeRemoved(() => screen.getAllByTestId('loading'));
      // expect(await screen.findByTestId('page'));
      // screen.debug();
    });
  });

  it('データがない場合、Empty State用の要素が表示される(data-testid:no-data)', async () => {
    const renderPage = testRenderer(<Home />, [
      {
        request: {
          query: GetTrainingOneTypeDocument,
          variables: {
            date: getStringTypeDate(new Date()),
          },
        },
        result: {
          data: {
            __typename: 'query_root',
            trainings: [],
          },
        },
      },
    ]);
    await act(async () => {
      renderPage();
      expect(screen.findByTestId('loading'));
      await new Promise((resolve) => setTimeout(resolve, 0));
      expect(await screen.findByTestId('no-data'));
      // screen.debug();
    });
  });
});
