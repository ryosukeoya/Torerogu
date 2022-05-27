import { getDataExtractionInSpecifiedPeriod } from '~/utils/graph';
import { getDateChangedSpecifiedDaysPart, getStringTypeDate } from './date';

describe('Unit Test', () => {
  it('1週間分のデータが抽出できるか（シンプルなテストデータの場合）', () => {
    const testData = [
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -8), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -7), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -6), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -5), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -4), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -3), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -2), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -1), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), 0), 'YYYY-MM-DD'), is_record: true },
    ];
    expect(getDataExtractionInSpecifiedPeriod(testData, 7)).toEqual([
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -6), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -5), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -4), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -3), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -2), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -1), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), 0), 'YYYY-MM-DD'), is_record: true },
    ]);
  });
  it('1週間分のデータを抽出した場合の出力形式は正しいか', () => {
    const testData = [
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -8), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -8), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -7), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -6), 'YYYY-MM-DD'), is_record: false },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -5), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -5), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -4), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -3), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -3), 'YYYY-MM-DD'), is_record: false },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -3), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -2), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -1), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), 0), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), 1), 'YYYY-MM-DD'), is_record: false },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), 3), 'YYYY-MM-DD'), is_record: false },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), 10), 'YYYY-MM-DD'), is_record: false },
    ];
    expect(getDataExtractionInSpecifiedPeriod(testData, 7)).toEqual([
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -5), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -5), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -4), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -3), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -3), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -2), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), -1), 'YYYY-MM-DD'), is_record: true },
      { date: getStringTypeDate(getDateChangedSpecifiedDaysPart(new Date(), 0), 'YYYY-MM-DD'), is_record: true },
    ]);
  });
});
