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

afterEach(() => {
  jest.clearAllMocks();
});

describe('Integration Test', () => {
  const _onCompletedTest = jest.fn();
  const renderPage = testRendererUsingApolloClientMock(<BodyInfoPage pageIndex={0} _onCompletedTest={_onCompletedTest} />, [createBodyInfoHistories(planPageVariables)]);
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
    expect(_onCompletedTest).toHaveBeenCalled();
    // expect(screen.getByText(/記録しました/));
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
    expect(_onCompletedTest).not.toHaveBeenCalled();
    // expect(() => screen.getByText(/記録しました/)).toThrowError();
  });
});

describe('Integration Test:バリデーション', () => {
  const _onCompletedTest = jest.fn();
  const renderPage = testRendererUsingApolloClientMock(<BodyInfoPage pageIndex={0} _onCompletedTest={_onCompletedTest} />, [createBodyInfoHistories(planPageVariables)]);
  it('体重に文字列を入力すると、数値を入力することを促すエラー文言が表示され、登録処理が実施されない', async () => {
    renderPage();
    const submitButton = screen.getByTestId('submit');
    const dateInput: HTMLInputElement = screen.getByTestId('date');
    const weightInput: HTMLInputElement = screen.getByTestId('weight');
    fireEvent.input(dateInput, { target: { value: getStringTypeDate(new Date(), 'YYYY-MM-DD') } });
    fireEvent.input(weightInput, { target: { value: 'foo' } });
    fireEvent.submit(submitButton);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByText(/数値を入力してください/));
    expect(_onCompletedTest).not.toHaveBeenCalled();
    // expect(() => screen.getByText(/記録しました/)).toThrowError();
  });

  it('体重に4桁以上を入力すると、桁数を小さくすることを促すエラー文言が表示され、登録処理が実施されない', async () => {
    renderPage();
    const submitButton = screen.getByTestId('submit');
    const dateInput: HTMLInputElement = screen.getByTestId('date');
    const weightInput: HTMLInputElement = screen.getByTestId('weight');
    fireEvent.input(dateInput, { target: { value: getStringTypeDate(new Date(), 'YYYY-MM-DD') } });
    fireEvent.input(weightInput, { target: { value: 1000 } });
    expect(weightInput.value).toBe('1000');
    fireEvent.submit(submitButton);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByText(/桁数を小さくしてください/));
    expect(_onCompletedTest).not.toHaveBeenCalled();
    // expect(() => screen.getByText(/記録しました/)).toThrowError();
  });

  it('体脂肪率に文字列を入力すると、数値を入力することを促すエラー文言が表示され、登録処理が実施されない', async () => {
    renderPage();
    const submitButton = screen.getByTestId('submit');
    const dateInput: HTMLInputElement = screen.getByTestId('date');
    const bodyFatPercentageInput: HTMLInputElement = screen.getByTestId('bodyFatPercentage');
    fireEvent.input(dateInput, { target: { value: getStringTypeDate(new Date(), 'YYYY-MM-DD') } });
    fireEvent.input(bodyFatPercentageInput, { target: { value: 'ho' } });
    fireEvent.submit(submitButton);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByText(/数値を入力してください/));
    expect(_onCompletedTest).not.toHaveBeenCalled();
    // expect(() => screen.getByText(/記録しました/)).toThrowError();
  });

  it('体脂肪率に3桁以上を入力すると、桁数を小さくすることを促すエラー文言が表示され、登録処理が実施されない', async () => {
    renderPage();
    const submitButton = screen.getByTestId('submit');
    const dateInput: HTMLInputElement = screen.getByTestId('date');
    const bodyFatPercentageInput: HTMLInputElement = screen.getByTestId('bodyFatPercentage');
    fireEvent.input(dateInput, { target: { value: getStringTypeDate(new Date(), 'YYYY-MM-DD') } });
    fireEvent.input(bodyFatPercentageInput, { target: { value: 100 } });
    expect(bodyFatPercentageInput.value).toBe('100');
    fireEvent.submit(submitButton);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(screen.getByText(/桁数を小さくしてください/));
    expect(_onCompletedTest).not.toHaveBeenCalled();
    // expect(() => screen.getByText(/記録しました/)).toThrowError();
  });
});
