import type { VFC, Dispatch } from 'react';
import { useIsActive } from '~/hooks';
import { useRecoilValue, SetterOrUpdater, useSetRecoilState } from 'recoil';
import { swiperAtom, pageIndexAtom } from '~/store/atoms';
import { COLOR, FONT } from '~/styles/const';
import { media } from '~/styles/shares';
import { css, SerializedStyles } from '@emotion/react';

type Props = {
  title: string;
  index: number;
  activeIndex: number;
  setActiveIndex: SetterOrUpdater<number> | Dispatch<React.SetStateAction<number>>;
};

export const Tab: VFC<Props> = ({ title, activeIndex, setActiveIndex, index }) => {
  const swiper = useRecoilValue(swiperAtom);
  const setPageIndex = useSetRecoilState(pageIndexAtom);
  const isActive = useIsActive(true, activeIndex, index);

  return (
    <li
      onClick={() => {
        swiper?.slideTo(index);
        setActiveIndex(index);
        setPageIndex(index);
      }}
      css={styles.tab(isActive)}
    >
      {title}
    </li>
  );
};

const styles = {
  tab: (isActive?: boolean): SerializedStyles => css`
    display: none;
    ${media.pc(css`
      display: inline-block;
      color: ${isActive ? COLOR.ORANGE : 'black'};
      ${isActive && `border-bottom: 1px solid ${COLOR.ORANGE}`};
      padding: 15px;
      font-size: ${FONT.BASE};
      background-color: inherit;
      text-align: center;
      width: 100%;
      cursor: pointer;
      font-size: ${FONT.SMALL};
      &:first-of-type {
        border-right: 0.3px solid ${COLOR.BORDER_GRAY};
      }
    `)}
    @media (hover: hover) {
      &:hover {
        background-color: ${COLOR.HOVER_ORANGE};
      }
    }
  `,
};
