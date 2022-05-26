import { getDataSpecifiedDate, getDateChangedSpecifiedDaysPart, getStringTypeDate, getExtractedDataLaterThanTheSpecifiedDate, getDateBeforeOneDay } from '~/utils';

describe('Unit Test', () => {
  test('指定した日付のデータが取得できる', () => {
    const testData = [{ date: '2021-02-22' }, { date: '2022-04-23' }, { date: '2022-04-24' }, { date: '2022-04-25' }];

    expect(getDataSpecifiedDate(testData, new Date('2022-04-24'))).toEqual([{ date: '2022-04-24' }]);
  });

  test('終了フラグがfalseの場合は指定した日付以降のデータと終了フラグがtrueの場合は全てのデータの条件で抽出されたデータを取得できる', () => {
    const testData = [
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), - 40), 'YYYY-MM-DD'), is_finish: false },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), - 40), 'YYYY-MM-DD'), is_finish: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), - 1), 'YYYY-MM-DD'), is_finish: false },
      { date: getStringTypeDate(new Date(), 'YYYY-MM-DD'), is_finish: false },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), 1), 'YYYY-MM-DD'), is_finish: false },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), 40), 'YYYY-MM-DD'), is_finish: false },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), 40), 'YYYY-MM-DD'), is_finish: true },
    ];

    expect(getExtractedDataLaterThanTheSpecifiedDate(testData, getDateBeforeOneDay(new Date()))).toEqual([
      testData[1],
      testData[3],
      testData[4],
      testData[5],
      testData[6],
    ]);
  });
});
