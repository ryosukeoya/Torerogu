import Link from 'next/link';
import React from 'react';
import type { VFC } from 'react';
import { css, keyframes, SerializedStyles } from '@emotion/react';
import { getIcon } from '~/utils/app';
import { PAGE_PATH } from '~/constants/index';
import type { PageTitle } from '~/types/index';
import { useSetRecoilState } from 'recoil';
import { headerTabIndexAtom } from '~/store';
import { BREAKPOINT, COLOR, FONT } from '~/styles/const';
import { useIsActive, useRipple, useGetWindowSize } from '~/hooks';

type Props = {
  isToggle?: true;
  isResetIndex: boolean;
  title: PageTitle;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Tab: VFC<Props> = ({ isToggle, isResetIndex, title, index, activeIndex: parentActiveIndex, setActiveIndex: parentSetActiveIndex }) => {
  const setActiveIndex = useSetRecoilState<number>(headerTabIndexAtom); /* eslint-disable-line @typescript-eslint/no-unused-vars */
  const isActive = useIsActive(!!isToggle, parentActiveIndex, index);

  const [, setCoords, isRippling] = useRipple(170);
  const { width } = useGetWindowSize();

  return (
    <Link href={PAGE_PATH[title]} passHref>
      <a
        onClick={(e) => {
          parentSetActiveIndex(index);
          isResetIndex && setActiveIndex(0);
          const rect = e.currentTarget.getBoundingClientRect();
          setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        css={styles.box}
      >
        {width < parseInt(BREAKPOINT.MD) && isRippling ? <span css={styles.ripple} /> : ''}
        <p>{getIcon(title, isActive)}</p>
        <p css={styles.title(isActive)}>{title}</p>
      </a>
    </Link>
  );
};

export default Tab;

const rippleEffect = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 0.4;
  }
  50% {
    transform: scale(1);
    opacity: 0.18;
  }
  100% {
    transform: scale(1.25);
    opacity: 0.16;
  }
`;

const styles = {
  box: css`
    display: block;
    width: 50px;
    height: 50px;
    text-align: center;
    padding-top: 3px;
    position: relative;
    &:hover {
      background-color: ${COLOR.HOVER_RED};
    }
    @media (min-width: ${BREAKPOINT.MD}) {
      width: auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 28px 40px;
      border-radius: 30px;
      margin-bottom: 10px;
    }
  `,
  title: (isActive?: boolean): SerializedStyles => css`
    color: ${isActive ? COLOR.RED : 'black'};
    padding-top: 2px;
    font-size: ${FONT.X_SMALL};
    @media (min-width: ${BREAKPOINT.MD}) {
      display: inline-block;
      padding-left: 10px;
    }
  `,
  ripple: css`
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: ${COLOR.RED};
    content: '';
    border-radius: 50%;
    opacity: 1;
    animation: 0.17s ease 0s forwards ${rippleEffect};
  `,
};
