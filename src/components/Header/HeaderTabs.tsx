import type { VFC } from 'react';
import { css } from '@emotion/react';
import Tab from './HeaderTab';
import { useRecoilState } from 'recoil';
import { headerTabIndexAtom } from '../../store';
import { useGetTitle } from '../../hooks/useGetTitle';

const HeaderTabs: VFC = () => {
  const [activeIndex, setActiveIndex] = useRecoilState<number>(headerTabIndexAtom);

  const changeActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  const titles = useGetTitle();

  return (
    <ul css={styles.tabs}>
      {titles?.map((title: string, i: number) => {
        return <Tab key={i} onClick={changeActiveIndex} index={i} activeIndex={activeIndex} title={title} isToggle={true} />;
      })}
    </ul>
  );
};

export default HeaderTabs;

const styles = {
  tabs: css`
    clear: both;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  `,
};
