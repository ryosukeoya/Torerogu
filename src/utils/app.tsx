import { WEEK_DAYS } from '../constants';
import { PAGE_PATH } from '~/constants';
import { PagePaths } from '~/types';

// Date型を項目毎にプロパティとして分けたオブジェクトに変換して返す
export const getDateInfo = (date: Date) => {
  const weekdayIndex: number = date.getDay();
  const dateInfo = {
    year: date.getFullYear(),
    weekday: WEEK_DAYS[weekdayIndex],
    month: date.getMonth() + 1,
    day: date.getDate(),
    mm: ('00' + (date.getMonth() + 1)).slice(-2),
    dd: ('00' + date.getDate()).slice(-2),
  };
  return dateInfo;
};

// Date型からString型に変換したものを返す
export const getStringTypeDate = (date: Date, outputFormat?: 'YYYY-MM-DD' | 'normal'): string => {
  const year = date.getFullYear();
  if (outputFormat === 'YYYY-MM-DD') {
    const mm = ('00' + (date.getMonth() + 1)).slice(-2);
    const dd = ('00' + date.getDate()).slice(-2);
    return `${year}-${mm}-${dd}`;
  } else {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }
};

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
