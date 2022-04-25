import { getDateInfo } from '~/utils/app';

/**
 * Unit Test, Black Box
 */
test('出力の形式が正しいか', () => {
  expect(getDateInfo(new Date('2022-04-24'))).toEqual({ year: 2022, weekday: '日', month: 4, day: 24, mm: '04', dd: '24' });
});

import { getStringTypeDate } from '~/utils/app';

test('Date型からString型に変換したものを返す', () => {
  expect(getStringTypeDate(new Date('2022-04-24'))).toBe('2022-4-24');
});

test('Date型からString型に変換したものを返す、フォーマットはYYYY-MM-DD', () => {
  expect(getStringTypeDate(new Date('2022-04-24'), 'YYYY-MM-DD')).toBe('2022-04-24');
});

import { getNumArr } from '~/utils';

test('出力の形式が正しいか', () => {
  expect(getNumArr(0, 100, 10)).toEqual([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
});

/**
 * Unit Test, White Box
 */
import { getPagePathIndex } from '~/utils/app';

test.each([
  ['/', 0],
  ['/plan', 1],
  ['/record', 2],
  ['/graph', 3],
  ['/some', 0],
])('.getPagePathIndex(%i)', (path, expected) => {
  expect(getPagePathIndex(path)).toBe(expected);
});
