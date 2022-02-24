import { useRouter } from 'next/router';
import React, { VFC, useState } from 'react';
import { styles } from './style';
import Tab from './BottomNavTab';
import { PAGE_PATH } from '../../constants/index';
import { PageTitles, PageTitle } from '../../types/index';
import { getPathIndex } from '../../enum';

const BottomNav: VFC = () => {
  const router = useRouter();
  const initialIndex = getPathIndex(router.pathname);

  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);
  const titles = Object.keys(PAGE_PATH) as PageTitles;

  return (
    <nav css={styles.bottomNav}>
      {titles.map((title: PageTitle, index: number) => {
        return <Tab key={index} index={index} title={title} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
      })}
    </nav>
  );
};

export default BottomNav;
