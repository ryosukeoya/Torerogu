import type { VFC } from 'react';
import { css } from '@emotion/react';
import { COLOR } from '../../../styles/const';

type Props = {
  index: number;
  activeIndex: number;
  title: string;
  isToggle?: boolean;
  onClick: (index: number) => void;
};

const DateNavigation: VFC<Props> = ({ index, activeIndex, title, isToggle, onClick }) => {
  let isActive = false;
  if (isToggle) {
    if (index === activeIndex) {
      isActive = true;
    }
  }

  return (
    <li onClick={() => onClick(index)} css={[styles.item, isActive && styles.active]}>
      {title}
    </li>
  );
};

export default DateNavigation;

const styles = {
  item: css`
    padding: 10px;
    margin: 0 10px;
  `,
  active: css`
    color: #fff;
    background-color: ${COLOR.ORANGE};
    border-radius: 20px;
  `,
};
