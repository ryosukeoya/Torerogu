import { PATH } from '../constants/index';

export const getIndex = (pathName: string): number => {
  switch (pathName) {
    case PATH.HOME:
      return 0;
    case PATH.PLAN:
      return 1;
    case PATH.RECORD:
      return 2;
    case PATH.GRAPH:
      return 3;
    default:
      return 0;
  }
};
