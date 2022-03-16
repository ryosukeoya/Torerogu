import Link from 'next/link';
import React from 'react';
import type { VFC } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { getIcon } from '../../utils/app';
import { PAGE_PATH } from '../../constants/index';
import type { PageTitle } from '../../types/index';
import { useSetRecoilState } from 'recoil';
import { headerTabIndexAtom } from '../../store';
import { COLOR } from '../../styles/const';
import { useIsActive } from '../../hooks/useIsActive';

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

  return (
    <Link href={PAGE_PATH[title]} passHref>
      <a
        onClick={() => {
          parentSetActiveIndex(index);
          isResetIndex && setActiveIndex(0);
        }}
        css={styles.box}
      >
        {getIcon(title, isActive)}
        <p css={styles.title(isActive)}>{title}</p>
      </a>
    </Link>
  );
};

export default Tab;

const styles = {
  box: css`
    display: block;
    text-align: center;
    padding: 10px;
  `,
  title: (isActive?: boolean): SerializedStyles => css`
    color: ${isActive ? COLOR.RED : 'black'};
    padding-top: 5px;
    font-size: 11px;
  `,
};
