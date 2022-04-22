export const APP = {
  NAME: 'トレログ',
  DESC: '筋トレアプリ',
} as const;

export const PAGE_TITLE = ['ホーム', '計画', '記録', 'グラフ'] as const;

export const PAGE_PATH = {
  [PAGE_TITLE[0]]: '/', // subpath '/home' https://nextjs.org/docs/api-reference/next.config.js/rewrites
  [PAGE_TITLE[1]]: '/plan',
  [PAGE_TITLE[2]]: '/record',
  [PAGE_TITLE[3]]: '/graph',
} as const;

export const PAGE_CATEGORY_NAMES = {
  [PAGE_TITLE[0]]: ['ホーム', 'スケジュール'],
  [PAGE_TITLE[1]]: ['体重', 'トレーニング'],
  [PAGE_TITLE[2]]: ['身体', 'トレーニング'],
  [PAGE_TITLE[3]]: ['体重', '体脂肪率', '種目'],
} as const;

export const WEEK_DAYS = ['日', '月', '火', '水', '木', '金', '土'] as const;
