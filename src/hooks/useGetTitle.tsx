import { useRouter } from 'next/router';
import { PATH } from '../constants';

export const useGetTitle = (): string[] | null => {
  const router = useRouter();
  const { pathname } = router;
  switch (pathname) {
    case PATH.ホーム:
      return ['体重', 'トレーニング'];
    case PATH.計画:
      return ['体重', 'トレーニング'];
    case PATH.記録:
      return ['身体', 'トレーニング'];
    case PATH.グラフ:
      return ['体重', '体脂肪率', '種目'];
    default:
      return null;
  }
};
