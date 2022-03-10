import type { VFC } from 'react';
import type { SetterOrUpdater } from 'recoil';
import { css } from '@emotion/react';
import Tab from './Tab';
import { useGetTitle } from '../../hooks/useGetTitle';

type Props = {
  activeIndex: number;
  setActiveIndex: SetterOrUpdater<number>;
};

const Tabs: VFC<Props> = ({ activeIndex, setActiveIndex }) => {
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

export default Tabs;

const styles = {
  tabs: css`
    clear: both;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  `,
};
