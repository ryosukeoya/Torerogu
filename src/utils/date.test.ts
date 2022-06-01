import { getDateInfo, getStringTypeDate, getDateInRegexp, getDateClearedTime } from './date';

describe('Unit Test: getDateInfo', () => {
  test('出力の形式が正しいか', () => {
    expect(getDateInfo(new Date('2022-04-24'))).toEqual({ year: 2022, weekday: '日', month: 4, day: 24, mm: '04', dd: '24' });
  });
});

describe('Unit Test: getStringTypeDate', () => {
  test('Date型からString型に変換したものを返す', () => {
    expect(getStringTypeDate(new Date('2022-04-24'))).toBe('2022-4-24');
  });
  test('Date型からString型に変換したものを返す、フォーマットはYYYY-MM-DD', () => {
    expect(getStringTypeDate(new Date('2022-04-24'), 'YYYY-MM-DD')).toBe('2022-04-24');
  });
  test('Date型からString型に変換したものを返す、フォーマットはYYYY-MM-DD', () => {
    expect(getStringTypeDate(new Date('2022-04-24 '), 'YYYY-MM-DD')).toBe('2022-04-24');
  });
});

describe('Unit Test: getDateInRegexp', () => {
  it('出力の形式が正しいか', () => {
    expect(getDateInRegexp('2022-05-30T15:02:35.597+00:00')).toBe('2022-05-30');
  });
  it('出力の形式が正しいか', () => {
    expect(getDateInRegexp('2022-06-01T00:00:00+00:00')).toBe('2022-06-01');
  });
  it('年月日が先頭でない場合はundefinedを返す', () => {
    expect(getDateInRegexp('1234567-2022-06-01T00:00:00+00:00')).toBeUndefined();
  });
  it('月日などの0が省略されている場合はundefinedを返す', () => {
    expect(getDateInRegexp('2022-6-1T00:00:00+00:00')).toBeUndefined();
  });
});

describe('Unit Test: getDateClearedTime', () => {
  it('出力の形式が正しいか', () => {
    expect(getDateClearedTime(new Date('2022-06-01 15:30:00'))).toStrictEqual(new Date('2022-06-01 00:00:00'));
  });
});
