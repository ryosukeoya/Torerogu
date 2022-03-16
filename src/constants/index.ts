import { PageTitles } from '../types/index';

export const APP = {
  NAME: 'トレログ',
  DESC: '筋トレアプリ',
} as const;

export const PAGE_TITLE = ['ホーム', '計画', '記録', 'グラフ'] as PageTitles;

export const PAGE_PATH = {
  [PAGE_TITLE[0]]: '/',
  [PAGE_TITLE[1]]: '/plan',
  [PAGE_TITLE[2]]: '/record',
  [PAGE_TITLE[3]]: '/graph',
} as const;

export const WEEK_DAYS = ['日', '月', '火', '水', '木', '金', '土'] as const;
