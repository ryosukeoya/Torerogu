import { VFC } from 'react';
import { useRecoilState } from 'recoil';
import { mainTabIndexAtom } from '~/store/atoms';
import { css } from '@emotion/react';
import { media } from '~/styles/shares';
import type { PageCategoryNames } from '~/types/app';
import { Tab } from './Tab';

type Props = {
  titles: string[] | PageCategoryNames | null;
};

export const Tabs: VFC<Props> = ({ titles }) => {
  const [activeIndex, setActiveIndex] = useRecoilState<number>(mainTabIndexAtom);

  return (
    <ul css={styles.tabs}>
      {titles?.map((title: string, i: number) => {
        return <Tab key={i} index={i} title={title} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
      })}
    </ul>
  );
};

const styles = {
  tabs: css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: #fff;
    ${media.pc(css`
      display: none;
    `)}
  `,
};
