import { useRouter } from 'next/router';
import { PATH } from '../constants';

export const useGetTitle = (): string[] | null => {
  const router = useRouter();
  const { pathname } = router;
  switch (pathname) {
    case PATH.HOME:
      return ['体重', 'トレーニング'];
    case PATH.PLAN:
      return ['体重', 'トレーニング'];
    case PATH.RECORD:
      return ['身体', 'トレーニング'];
    case PATH.GRAPH:
      return ['体重', '体脂肪率', '種目'];
    default:
      return null;
  }
};
