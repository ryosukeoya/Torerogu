import BodyInfoPage from './BodyInfoPage';
import { screen, act, fireEvent } from '@testing-library/react';
import { testRendererUsingApolloClientMock } from '~/tests/mocks/renders/testRendererUsingApolloClientMock';
import { createBodyInfoHistories, recordPageVariables } from '~/tests/mocks/datum/createBodyInfoHistoriesMock';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));
jest.mock('~/components/PageSlider/useChangeSettingOnInWindowSize');

describe('Integration Test', () => {
  const renderPage = testRendererUsingApolloClientMock(<BodyInfoPage pageIndex={0} />, [createBodyInfoHistories(recordPageVariables)]);
  
  it('必須項目が入力されている状態で送信ボタンをクリックした場合、スナックバーが表示される', async () => {
    renderPage();
    const submitButton = screen.getByTestId('submit');
    const weightInput: HTMLInputElement = screen.getByTestId('weight');
    fireEvent.input(weightInput, { target: { value: 55 } });
    expect(weightInput.value).toBe('55');
    fireEvent.submit(submitButton);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByText('記録しました！'));
  });

  it('必須項目が入力されていない状態で送信ボタンをクリックした場合、登録処理がが実行されず、スナックバーが表示されない', async () => {
    renderPage();
    const submitButton = screen.getByTestId('submit');
    const bodyFatPercentageInput: HTMLInputElement = screen.getByTestId('bodyFatPercentage');
    fireEvent.input(bodyFatPercentageInput, { target: { value: 20 } });
    expect(bodyFatPercentageInput.value).toBe('20');
    fireEvent.submit(submitButton);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(() => screen.getByText('記録しました！')).toThrowError();
  });
});
