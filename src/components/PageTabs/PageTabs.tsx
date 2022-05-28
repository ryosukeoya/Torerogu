import { VFC } from 'react';
import { useRecoilState } from 'recoil';
import { mainTabIndexAtom } from '~/store/atoms';
import { Tab } from './Tab';
import type { PageCategoryNames } from '~/types/app';
import { COLOR, Z_INDEX } from '~/styles/const';
import { css } from '@emotion/react';
import { media } from '~/styles/shares';

type Props = {
  titles: string[] | PageCategoryNames | null;
  width: number | undefined;
};

export const PageTabs: VFC<Props> = ({ titles, width }) => {
  const [activeIndex, setActiveIndex] = useRecoilState<number>(mainTabIndexAtom);

  return (
    <ul css={styles.nav(width)}>
      {titles?.map((title: string, i: number) => {
        return <Tab key={i} index={i} title={title} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
      })}
    </ul>
  );
};

const styles = {
  nav: (navWidth?: number) => css`
    display: none;
    ${media.pc(css`
      display: flex;
      position: fixed;
      top: auto;
      left: auto;
      z-index: ${Z_INDEX.PRIMARY_NAVIGATION};
      width: ${navWidth}px;
      border-bottom: 0.3px solid ${COLOR.BORDER_GRAY};
      background-color: #fff;
    `)}
  `,
};
