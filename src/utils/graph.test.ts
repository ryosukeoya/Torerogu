import { getDataExtractionInSpecifiedPeriod } from './graph';

const mockData = new Date('2022-05-28 08:00:00');
jest.useFakeTimers();
jest.setSystemTime(mockData);

afterEach(() => {
  jest.useRealTimers();
});

describe('Unit Test', () => {
  it('1週間分のデータが抽出できるか', () => {
    const testData = [
      { date: '2022-05-20 00:00:00', is_record: true },
      { date: '2022-05-21 00:00:00', is_record: false },
      { date: '2022-05-21 00:00:00', is_record: true },
      { date: '2022-05-22 07:59:00', is_record: true },
      { date: '2022-05-22 08:00:00', is_record: true },
      { date: '2022-05-22 08:01:00', is_record: true },
      { date: '2022-05-23 00:00:00', is_record: true },
      { date: '2022-05-24 00:00:00', is_record: true },
      { date: '2022-05-25 00:00:00', is_record: true },
      { date: '2022-05-25 00:00:00', is_record: false },
      { date: '2022-05-26 00:00:00', is_record: true },
      { date: '2022-05-27 00:00:00', is_record: true },
      { date: '2022-05-28 07:59:00', is_record: true },
      { date: '2022-05-28 08:00:00', is_record: true },
      { date: '2022-05-28 08:01:00', is_record: true },
      { date: '2022-05-28 08:01:00', is_record: false },
      { date: '2022-05-31 00:00:00', is_record: false },
    ];
    expect(getDataExtractionInSpecifiedPeriod(testData, 7)).toEqual([
      { date: '2022-05-22 08:00:00', is_record: true },
      { date: '2022-05-22 08:01:00', is_record: true },
      { date: '2022-05-23 00:00:00', is_record: true },
      { date: '2022-05-24 00:00:00', is_record: true },
      { date: '2022-05-25 00:00:00', is_record: true },
      { date: '2022-05-26 00:00:00', is_record: true },
      { date: '2022-05-27 00:00:00', is_record: true },
      { date: '2022-05-28 07:59:00', is_record: true },
      { date: '2022-05-28 08:00:00', is_record: true },
    ]);
  });
});