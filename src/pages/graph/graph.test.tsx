import Graph from './index.p';
import { act, screen } from '@testing-library/react';
import { testRendererUsingApolloClientMock } from '~/tests/mocks/renders/testRendererUsingApolloClientMockUsingApolloClientMock';
import { getTrainingWithBodyMock } from '~/tests/mocks/datum/getTrainingWithBodyInfoMock';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));
jest.mock('../../components/PageSlider/useChangeSettingOnInWindowSize');

describe('Integration Test', () => {
  const renderPage = testRendererUsingApolloClientMock(<Graph />, [getTrainingWithBodyMock]);

  it('loading画面表示され、データをフェッチし取得後pageがレンダリングされる', async () => {
    renderPage();
    expect(screen.getByTestId('loading'));
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByTestId('page'));
    // screen.debug();
  });
});
