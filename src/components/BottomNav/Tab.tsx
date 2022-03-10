import Link from 'next/link';
import React from 'react';
import type { VFC } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { getIcon } from '../../utils/index';
import { PAGE_PATH } from '../../constants/index';
import type { PageTitle } from '../../types/index';
import { useRecoilState } from 'recoil';
import { headerTabIndexAtom } from '../../store';
import { COLOR } from '../../styles/const';

type Props = {
  isResetIndex: boolean;
  title: PageTitle;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Tab: VFC<Props> = (props) => {
  const [activeIndex, setActiveIndex] = useRecoilState<number>(headerTabIndexAtom); /* eslint-disable-line @typescript-eslint/no-unused-vars */

  let isActive = false;
  if (props.activeIndex === props.index) {
    isActive = true;
  }

  return (
    <Link href={PAGE_PATH[props.title]} passHref>
      <a
        onClick={() => {
          props.setActiveIndex(props.index);
          props.isResetIndex && setActiveIndex(0);
        }}
        css={styles.box}
      >
        {getIcon(props.title, isActive)}
        <p css={styles.title(isActive)}>{props.title}</p>
      </a>
    </Link>
  );
};

export default Tab;

const styles = {
  box: css`
    display: block;
    text-align: center;
    padding:10px;
  `,
  title: (isActive?: boolean): SerializedStyles => css`
    color: ${isActive ? COLOR.RED : 'black'};
    padding-top: 5px;
    font-size: 11px;
  `,
};
