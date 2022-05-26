import { getDataExtractionInSpecifiedPeriod } from '~/utils/graph';

describe('Unit Test', () => {
  it('1週間分のデータが抽出できるか（シンプルなテストデータの場合）', () => {
    const testData = [
      { date: '2022-05-18', is_record: true },
      { date: '2022-05-19', is_record: true },
      { date: '2022-05-20', is_record: true },
      { date: '2022-05-21', is_record: true },
      { date: '2022-05-22', is_record: true },
      { date: '2022-05-23', is_record: true },
      { date: '2022-05-24', is_record: true },
      { date: '2022-05-25', is_record: true },
      { date: '2022-05-26', is_record: true },
    ];
    expect(getDataExtractionInSpecifiedPeriod(testData, 7)).toEqual([
      { date: '2022-05-20', is_record: true },
      { date: '2022-05-21', is_record: true },
      { date: '2022-05-22', is_record: true },
      { date: '2022-05-23', is_record: true },
      { date: '2022-05-24', is_record: true },
      { date: '2022-05-25', is_record: true },
      { date: '2022-05-26', is_record: true },
    ]);
  });
  it('1週間分のデータを抽出した場合の出力形式は正しいか', () => {
    const testData = [
      { date: '2022-05-18', is_record: true },
      { date: '2022-05-18', is_record: true },
      { date: '2022-05-19', is_record: true },
      { date: '2022-05-20', is_record: false },
      { date: '2022-05-21', is_record: true },
      { date: '2022-05-21', is_record: true },
      { date: '2022-05-22', is_record: true },
      { date: '2022-05-23', is_record: true },
      { date: '2022-05-23', is_record: false },
      { date: '2022-05-23', is_record: true },
      { date: '2022-05-24', is_record: true },
      { date: '2022-05-25', is_record: true },
      { date: '2022-05-26', is_record: true },
    ];
    expect(getDataExtractionInSpecifiedPeriod(testData, 7)).toEqual([
      { date: '2022-05-21', is_record: true },
      { date: '2022-05-21', is_record: true },
      { date: '2022-05-22', is_record: true },
      { date: '2022-05-23', is_record: true },
      { date: '2022-05-23', is_record: true },
      { date: '2022-05-24', is_record: true },
      { date: '2022-05-25', is_record: true },
      { date: '2022-05-26', is_record: true },
    ]);
  });
});
