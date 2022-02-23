import { PAGE_PATH } from '../constants/index';

export type PageTitles = ['ホーム', '計画', '記録', 'グラフ'];

export type Title = keyof typeof PAGE_PATH;
