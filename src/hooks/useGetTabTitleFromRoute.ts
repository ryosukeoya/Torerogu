import { useRouter } from 'next/router';
import { PAGE_PATH, PAGE_CATEGORY_NAMES } from '../constants';
import type { PageCategoryNames } from '~/types/app';

export const useGetTabTitleFromRoute = (): PageCategoryNames | null => {
  const router = useRouter();
  const { pathname } = router;
  switch (pathname) {
    case '/home':
      return PAGE_CATEGORY_NAMES.ホーム;
    case PAGE_PATH.計画:
      return PAGE_CATEGORY_NAMES.計画;
    case PAGE_PATH.記録:
      return PAGE_CATEGORY_NAMES.記録;
    case PAGE_PATH.グラフ:
      return PAGE_CATEGORY_NAMES.グラフ;
    default:
      return null;
  }
};
