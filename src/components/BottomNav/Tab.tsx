import React from 'react';
import type { VFC } from 'react';
import Link from 'next/link';
import { styles } from './style';
import { getIcon } from '../../utils/index';
import { PAGE_PATH } from '../../constants/index';
import { Title } from '../../types/index';

interface Props {
  title: Title ;
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
    <Link href={PAGE_PATH[props.title]} passHref>
      <a onClick={() => props.setActiveIndex(props.index)} css={styles.box}>
        {getIcon(props.title, isActive)}
        <p css={styles.title(isActive)}>{props.title}</p>
      </a>
    </Link>
  );
};

export default Tab;
