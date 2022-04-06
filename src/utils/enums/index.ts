// 数字(識別用)と意味を持つ文字が対を成し、どちらかを返り値として返す関数を配置
import { PAGE_PATH } from '~/constants';
import { PagePaths } from '~/types';

export const getPathIndex = (path: PagePaths | string): 0 | 1 | 2 | 3 => {
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
