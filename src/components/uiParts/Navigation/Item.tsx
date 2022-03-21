import type { VFC, Dispatch } from 'react';
import { css } from '@emotion/react';
import { COLOR } from '~/styles/const';
import { useIsActive } from '~/hooks/useIsActive';
import type { SetterOrUpdater } from 'recoil';

type Props = {
  isToggle?: true;
  title: string;
  index: number;
  activeIndex: number;
  setActiveIndex: SetterOrUpdater<number> | Dispatch<React.SetStateAction<number>>;
};

const Item: VFC<Props> = ({ isToggle, title, index, activeIndex, setActiveIndex }) => {
  const isActive = useIsActive(!!isToggle, activeIndex, index);

  return (
    <li onClick={() => setActiveIndex(index)} css={[styles.item, isActive && styles.active]}>
      {title}
    </li>
  );
};

export default Item;

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
