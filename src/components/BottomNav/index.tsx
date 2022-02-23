import { useRouter } from 'next/router';
import React, { VFC, useState } from 'react';
import { styles } from './style';
import Tab from './Tab';
import { getIndex } from '../../enum';

const BottomNav: VFC = () => {
  const router = useRouter();
  const initialIndex = getIndex(router.pathname);

  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);

  return (
    <nav css={styles.bottomNav}>
      <Tab index={0} title='ホーム' activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Tab index={1} title='計画' activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Tab index={2} title='記録' activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Tab index={3} title='グラフ' activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </nav>
  );
};

export default BottomNav;
