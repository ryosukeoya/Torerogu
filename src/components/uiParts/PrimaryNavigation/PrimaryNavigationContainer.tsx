import { useState, VFC } from 'react';
import { PrimaryNavigationPresenter } from './PrimaryNavigationPresenter';

type Props = {
  titles: string[];
  initialIndex: number;
};

export const PrimaryNavigationContainer: VFC<Props> = ({ titles, initialIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);

  return <PrimaryNavigationPresenter titles={titles} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
};
