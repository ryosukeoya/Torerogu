import { PAGE_PATH } from '../constants/index';

export type PageTitle = keyof typeof PAGE_PATH;
export type PagePaths = typeof PAGE_PATH[keyof typeof PAGE_PATH];
