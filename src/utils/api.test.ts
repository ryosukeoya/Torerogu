import { getDataSpecifiedDate, getDateChangedSpecifiedDaysPart, getStringTypeDate, getExtractedDataLaterThanTheSpecifiedDate, getDateBeforeOneDay } from '~/utils';

describe('Unit Test', () => {
  test('指定した日付のデータが取得できる', () => {
    const testData = [{ date: '2021-02-22' }, { date: '2022-04-23' }, { date: '2022-04-24' }, { date: '2022-04-25' }];

    expect(getDataSpecifiedDate(testData, new Date('2022-04-24'))).toEqual([{ date: '2022-04-24' }]);
  });

  test('指定した日付以降で抽出されたデータが取得できる', () => {
    const testData = [
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), - 40), 'YYYY-MM-DD'), is_finish: false },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), - 1), 'YYYY-MM-DD'), is_finish: false },
      { date: getStringTypeDate(new Date(), 'YYYY-MM-DD'), is_finish: false },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), 1), 'YYYY-MM-DD'), is_finish: false },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), 40), 'YYYY-MM-DD'), is_finish: false },
    ];

    expect(getExtractedDataLaterThanTheSpecifiedDate(testData, getDateBeforeOneDay(new Date()))).toEqual([
      testData[2],
      testData[3],
      testData[4],
    ]);
  });
});
