import BodyInfoPage from './BodyInfoPage';
import { screen, act, fireEvent } from '@testing-library/react';
import { testRendererUsingApolloClientMock } from '~/tests/mocks/renders/testRendererUsingApolloClientMock';
import { createBodyInfoHistories, requiredRecordPageVariables, allRecordPageVariables } from '~/tests/mocks/datum/graphql/createBodyInfoHistories';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));
jest.mock('~/components/PageSlider/useChangeSettingOnInWindowSize');

describe('Integration Test', () => {
  const renderPage = testRendererUsingApolloClientMock(<BodyInfoPage pageIndex={0} />, [createBodyInfoHistories(requiredRecordPageVariables)]);

  it('体重を入力し送信ボタンをクリックすると、登録処理が実行され、「記録しました！」の文言が表示される', async () => {
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

  // TODO: refactor
  it('体重と体脂肪率を入力し送信ボタンをクリックすると、登録処理が実行され、「記録しました！」の文言が表示される', async () => {
    const renderPage = testRendererUsingApolloClientMock(<BodyInfoPage pageIndex={0} />, [createBodyInfoHistories(allRecordPageVariables)]);
    renderPage();
    const submitButton = screen.getByTestId('submit');
    const weightInput: HTMLInputElement = screen.getByTestId('weight');
    const bodyFatPercentageInput: HTMLInputElement = screen.getByTestId('bodyFatPercentage');
    fireEvent.input(weightInput, { target: { value: 55 } });
    fireEvent.input(bodyFatPercentageInput, { target: { value: 20 } });
    expect(weightInput.value).toBe('55');
    expect(bodyFatPercentageInput.value).toBe('20');
    fireEvent.submit(submitButton);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByText('記録しました！'));
  });

  it('体脂肪率を入力し（必須項目が入力されていない状態）送信ボタンをクリックすると、登録処理がが実行されず、「記録しました！」の文言が表示されない', async () => {
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
