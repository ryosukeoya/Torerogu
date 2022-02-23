import { PAGE_PATH } from '../constants/index';

export const getPathIndex = (pathName: string): number => {
  switch (pathName) {
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
