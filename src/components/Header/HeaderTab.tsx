import type { VFC } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { FONT, COLOR } from '../../styles/const';

type Props = {
  index: number;
  activeIndex: number;
  title: string;
  isToggle?: boolean;
  onClick: (index: number) => void;
};

const HeaderTab: VFC<Props> = ({ index, activeIndex, title, isToggle, onClick }) => {
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

export default HeaderTab;

const styles = {
  tab: (isActive?: boolean): SerializedStyles => css`
    color: ${isActive ? COLOR.ORANGE : 'black'};
    ${isActive && `border-bottom:1px solid ${COLOR.ORANGE}`};
    padding: 15px;
    font-size: ${FONT.BASE};
  `,
};
