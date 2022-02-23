import React from 'react';
import type { VFC } from 'react';
import Link from 'next/link';
import { styles } from './style';
import { getPath, getIcon } from '../../utils/index';

interface Props {
  title: 'ホーム' | '計画' | '記録' | 'グラフ';
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Tab: VFC<Props> = (props) => {
  let isActive = false;
  if (props.activeIndex === props.index) {
    isActive = true;
  }

  return (
    <Link href={getPath(props.title)} passHref>
      <a onClick={() => props.setActiveIndex(props.index)} css={styles.box}>
        {getIcon(props.title, isActive)}
        <p css={styles.title(isActive)}>{props.title}</p>
      </a>
    </Link>
  );
};

export default Tab;
