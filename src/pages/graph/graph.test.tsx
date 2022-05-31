import Graph from './index.p';
import { act, screen } from '@testing-library/react';
import { testRendererUsingApolloClientMock } from '~/tests/mocks/renders/testRendererUsingApolloClientMock';
import { getTrainingWithBody } from '~/tests/mocks/datum/graphql/getTrainingWithBodyInfo';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));
jest.mock('../../components/Slider/useChangeSettingOnInWindowSize');

describe('Integration Test', () => {
  const renderPage = testRendererUsingApolloClientMock(<Graph />, [getTrainingWithBody]);

  it('loading画面表示され、データをフェッチし取得後pageがレンダリングされる', async () => {
    renderPage();
    expect(screen.getByRole('loading'));
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByRole('page'));
    // screen.debug();
  });
});
