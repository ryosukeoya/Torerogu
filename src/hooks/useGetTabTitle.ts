import { useRouter } from 'next/router';
import { PAGE_PATH } from '../constants';

const useGetTabTitle = (): string[] | null => {
  const router = useRouter();
  const { pathname } = router;
  switch (pathname) {
    case PAGE_PATH.ホーム:
      return ['ホーム', '履歴'];
    case PAGE_PATH.計画:
      return ['体重', 'トレーニング'];
    case PAGE_PATH.記録:
      return ['身体', 'トレーニング'];
    case PAGE_PATH.グラフ:
      return ['体重', '体脂肪率', '種目'];
    default:
      return null;
  }
};

export default useGetTabTitle;