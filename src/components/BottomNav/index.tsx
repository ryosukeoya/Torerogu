import { useRouter } from 'next/router';
import React, { VFC, useState } from 'react';
import { styles } from './style';
import Tab from './Tab';
import { PAGE_PATH } from '../../constants/index';
import { PageTitles } from '../../types/index';
import { getPathIndex } from '../../enum';

const BottomNav: VFC = () => {
  const router = useRouter();
  const initialIndex = getPathIndex(router.pathname);

  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);
  const TITLE = Object.keys(PAGE_PATH) as PageTitles;

  return (
    <nav css={styles.bottomNav}>
      <Tab index={0} title={TITLE[0]} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Tab index={1} title={TITLE[1]} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Tab index={2} title={TITLE[2]} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Tab index={3} title={TITLE[3]} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </nav>
  );
};

export default BottomNav;
