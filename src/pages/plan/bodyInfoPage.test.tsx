import BodyInfoPage from './BodyInfoPage';
import { screen, act, fireEvent } from '@testing-library/react';
import { testRendererUsingApolloClientMock } from '~/tests/mocks/renders/testRendererUsingApolloClientMock';
import { createBodyInfoHistories, planPageVariables } from '~/tests/mocks/datum/graphql/createBodyInfoHistories';
import { getStringTypeDate } from '~/utils';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));
jest.mock('~/components/Slider/useChangeSettingOnInWindowSize');

describe('Integration Test', () => {
  const renderPage = testRendererUsingApolloClientMock(<BodyInfoPage pageIndex={0} />, [createBodyInfoHistories(planPageVariables)]);

  it('日付と体重(必須項目）を入力し送信ボタンをクリックすると、登録処理が実行され、「記録しました！」の文言が表示される', async () => {
    renderPage();
    const submitButton = screen.getByTestId('submit');
    const dateInput: HTMLInputElement = screen.getByTestId('date');
    const weightInput: HTMLInputElement = screen.getByTestId('weight');
    fireEvent.input(dateInput, { target: { value: getStringTypeDate(new Date(), 'YYYY-MM-DD') } });
    fireEvent.input(weightInput, { target: { value: 55 } });
    expect(dateInput.value).toBe(getStringTypeDate(new Date(), 'YYYY-MM-DD'));
    expect(weightInput.value).toBe('55');
    fireEvent.submit(submitButton);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByText('記録しました！'));
  });

  it('体脂肪率のみを入力し送信ボタンをクリックすると、登録処理が実行されず、「記録しました！」の文言が表示されない', async () => {
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
