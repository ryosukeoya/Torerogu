import Graph from './index.p';
import { act, screen } from '@testing-library/react';
import { testRenderer } from '~/tests/mocks/renders/testRenderer';
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
  const renderPage = testRenderer(<Graph />, [getTrainingWithBodyMock]);

  it('loading画面表示され、データをフェッチし取得後pageがレンダリングされる', async () => {
    await act(async () => {
      renderPage();
      expect(screen.findByTestId('loading'));
      await new Promise((resolve) => setTimeout(resolve, 0));
      expect(await screen.findByTestId('page'));
      // screen.debug();
    });
  });
});
