import { PATH } from '../constants/index';

export const getIndex = (pathName: string): number => {
  switch (pathName) {
    case PATH.ホーム:
      return 0;
    case PATH.計画:
      return 1;
    case PATH.記録:
      return 2;
    case PATH.グラフ:
      return 3;
    default:
      return 0;
  }
};
