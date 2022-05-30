import { getNumArr, getPagePathIndex } from './app';

describe('Unit Test: getPagePathIndex ', () => {
  test.each([
    ['/', 0],
    ['/plan', 1],
    ['/record', 2],
    ['/graph', 3],
    ['/some', 0],
  ])('.getPagePathIndex(%i)', (path, expected) => {
    expect(getPagePathIndex(path)).toBe(expected);
  });
});

describe('Unit Test: getNumArr', () => {
  test('出力の形式が正しいか', () => {
    expect(getNumArr(0, 100, 10)).toEqual([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
  });
});
