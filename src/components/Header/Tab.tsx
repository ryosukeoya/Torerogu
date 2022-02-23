import type { VFC } from 'react';
import { styles } from './style';

type Props = {
  index: number;
  activeIndex: number;
  title: string;
  isToggle?: boolean;
  onClick: (index:number) => void;
};

const Tab: VFC<Props> = ({index, activeIndex, title, isToggle, onClick }) => {
  let isActive = false;
  if (isToggle) {
    if (index === activeIndex) {
      isActive = true;
    }
  }

  return (
    <li onClick={() => onClick(index)} css={styles.tab(isActive)}>
      {title}
    </li>
  );
};

export default Tab;
