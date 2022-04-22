import { PAGE_PATH, PAGE_CATEGORY_NAMES } from '../constants';

export type PageTitle = keyof typeof PAGE_PATH;
export type PagePaths = typeof PAGE_PATH[keyof typeof PAGE_PATH];
export type PageCategoryNames = typeof PAGE_CATEGORY_NAMES[keyof typeof PAGE_CATEGORY_NAMES];