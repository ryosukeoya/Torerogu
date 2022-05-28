import type { VFC, ReactNode } from 'react';
import { useIsActive } from '~/hooks';
import { css } from '@emotion/react';
import { COLOR } from '~/styles/const';
import { SetterOrUpdater } from 'recoil';

type Props = {
  index: number;
  activeIndex: number;
  setActiveIndex: SetterOrUpdater<number>;
  color?: string;
  backgroundColor?: string;
  backgroundColorAtHover?: string;
  children: ReactNode;
};

export const Tab: VFC<Props> = ({ index, activeIndex, setActiveIndex, color,backgroundColor,backgroundColorAtHover,children }) => {
  const isActive = useIsActive(true, activeIndex, index);

  return (
    <li onClick={() => setActiveIndex(index)} css={styles.tab(isActive, color, backgroundColor, backgroundColorAtHover)}>
      {children}
    </li>
  );
};

const styles = {
  tab: (isActive?: boolean, color = 'black', backgroundColor: string = COLOR.ORANGE, backgroundColorAtHover = `${COLOR.ORANGE}E6`) => css`
    color: ${color};
    text-align: center;
    padding: 10px;
    margin: 0 10px;
    border-radius: 20px;
    ${isActive && `color: #fff`};
    ${isActive && `background-color: ${backgroundColor}`};
    ${isActive && `box-shadow: 0 1px 1px 0px ${COLOR.BORDER_GRAY}`}; //x軸 y軸 ぼかし 広がり カラー;
    @media (hover: hover) {
      &:hover {
        color: #fff;
        background-color: ${backgroundColorAtHover};
        box-shadow: 0 2px 6px 2px ${COLOR.BORDER_GRAY};
      }
    }
  `,
};
