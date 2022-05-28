import { PAGE_PATH } from '~/constants';
import { PagePaths } from '~/types';

export const getPagePathIndex = (path: PagePaths | string): 0 | 1 | 2 | 3 => {
  switch (path) {
    case PAGE_PATH.ホーム:
      return 0;
    case PAGE_PATH.計画:
      return 1;
    case PAGE_PATH.記録:
      return 2;
    case PAGE_PATH.グラフ:
      return 3;
    default:
      return 0;
  }
};

// 初期値と最大値と差分からnumber型の配列を作成し返す
export const getNumArr = (init: number, max: number, diff: number): number[] => {
  const numArr: number[] = [];
  for (let i = init; i <= max; i = i + diff) {
    numArr.push(i);
  }
  return numArr;
};
