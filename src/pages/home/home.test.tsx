import Home from './index.p';
import { act, screen } from '@testing-library/react';
import { testRenderer } from '~/tests/mocks/renders/testRenderer';
import { getTrainingOneTypeMock } from '~/tests/mocks/datum/getTrainingOneTypeMock';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));
jest.mock('../../components/PageSlider/useChangeSettingOnInWindowSize');
jest.mock('./SchedulePage', () => 'SchedulePageMock');

describe('<Home>', () => {
  const renderPage = testRenderer(<Home />, [getTrainingOneTypeMock]);

  // 分けた方がいいかと
  it('loading画面表示され、フェッチ後pageがレンダリングされる', async () => {
    await act(async () => {
      renderPage();
      expect(screen.findByTestId('loading'));
      await new Promise((resolve) => setTimeout(resolve, 0));
      expect(await screen.findByTestId('page'));
      screen.debug();

      // pattern2
      // renderPage();
      // expect(screen.findByTestId('loading'));
      // await waitForElementToBeRemoved(() => screen.getAllByTestId('loading'));
      // expect(await screen.findByTestId('page'));
      // screen.debug();
    });
  });
});
