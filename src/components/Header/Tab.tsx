import type { VFC } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { FONT, COLOR } from '../../styles/const';
import { useIsActive } from '../../hooks/useIsActive';

type Props = {
  index: number;
  activeIndex: number;
  title: string;
  isToggle?: boolean;
  onClick: (index: number) => void;
};

const Tab: VFC<Props> = ({ index, activeIndex, title, isToggle, onClick }) => {
  const isActive = useIsActive(isToggle, activeIndex, index);

  return (
    <li onClick={() => onClick(index)} css={styles.tab(isActive)}>
      {title}
    </li>
  );
};

export default Tab;

const styles = {
  tab: (isActive?: boolean): SerializedStyles => css`
    color: ${isActive ? COLOR.ORANGE : 'black'};
    ${isActive && `border-bottom:1px solid ${COLOR.ORANGE}`};
    padding: 15px;
    font-size: ${FONT.BASE};
    cursor: pointer;
    &:hover {
      /* border-bottom: 1px solid #dad2c8; */
      background-color: #fff8f1;
      /* background-color: #f8f8f8; */
    }
  `,
};
