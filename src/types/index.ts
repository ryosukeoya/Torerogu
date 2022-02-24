import { PAGE_PATH } from '../constants/index';

export type PageTitles = ['ホーム', '計画', '記録', 'グラフ'];

export type PageTitle = keyof typeof PAGE_PATH;
