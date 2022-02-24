import React from 'react';
import type { VFC } from 'react';
import Link from 'next/link';
import { styles } from './style';
import { getIcon } from '../../utils/index';
import { PAGE_PATH } from '../../constants/index';
import { PageTitle } from '../../types/index';
import { useRecoilState } from 'recoil';
import { headerTabIndexAtom } from '../../store';

type Props = {
  isResetIndex : boolean;
  title: PageTitle;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

const BottomNavTab: VFC<Props> = (props) => {
  const [activeIndex, setActiveIndex] = useRecoilState<number>(headerTabIndexAtom);

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

export default BottomNavTab;
