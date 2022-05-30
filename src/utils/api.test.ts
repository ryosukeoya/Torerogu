import { getDataSpecifiedDate, getExtractedDataLaterThanTheSpecifiedDate } from './api';

describe('Unit Test', () => {
  test('指定した日付のデータが取得できる', () => {
    const testData = [{ date: '2021-02-22' }, { date: '2022-04-23' }, { date: '2022-04-24' }, { date: '2022-04-25' }];

    expect(getDataSpecifiedDate(testData, new Date('2022-04-24'))).toEqual([{ date: '2022-04-24' }]);
  });

  test('終了フラグがfalseの場合は指定した日付以降のデータと終了フラグがtrueの場合は全てのデータの条件で抽出されたデータを取得できる', () => {
    const testData = [
      { date: '2022-04-28 08:00:00', is_finish: false },
      { date: '2022-04-28 08:00:00', is_finish: true },
      { date: '2022-04-29 08:00:00', is_finish: false },
      { date: '2022-05-30 08:00:00', is_finish: false },
      { date: '2022-05-31 08:00:00', is_finish: false },
      { date: '2022-06-28 08:00:00', is_finish: false },
      { date: '2022-06-28 08:00:00', is_finish: true },
    ];

    expect(getExtractedDataLaterThanTheSpecifiedDate(testData, new Date('2022-05-30 08:00:00'))).toEqual([
      { date: '2022-04-28 08:00:00', is_finish: true },
      { date: '2022-05-30 08:00:00', is_finish: false },
      { date: '2022-05-31 08:00:00', is_finish: false },
      { date: '2022-06-28 08:00:00', is_finish: false },
      { date: '2022-06-28 08:00:00', is_finish: true },
    ]);
  });
});