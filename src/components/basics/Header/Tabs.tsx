import type { VFC } from 'react';
import type { SetterOrUpdater } from 'recoil';
import { css } from '@emotion/react';
import Tab from './Tab';
import { useGetTitle } from '~/hooks';

type Props = {
  activeIndex: number;
  setActiveIndex: SetterOrUpdater<number>;
};

const Tabs: VFC<Props> = ({ activeIndex, setActiveIndex }) => {
  return (
    <ul css={styles.tabs}>
      {useGetTitle()?.map((title: string, i: number) => {
        return <Tab isToggle key={i} setState={setActiveIndex} index={i} activeIndex={activeIndex} title={title} />;
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
