import type { VFC } from 'react';
import { css } from '@emotion/react';
import Item from './Item';
import { useNavigation } from './useNavigation';

type Props = {
  titles: string[];
};

const Navigation: VFC<Props> = ({ titles }) => {
  const { activeIndex, changeActiveIndex } = useNavigation(0);

  return (
    <ul css={styles.items}>
      {titles?.map((title: string, i: number) => {
        return <Item key={i} onClick={changeActiveIndex} index={i} activeIndex={activeIndex} title={title} isToggle={true} />;
      })}
    </ul>
  );
};

export default Navigation;

const styles = {
  items: css`
    display: flex;
    cursor: pointer;
    justify-content: center;
    margin-top: 20px;
  `,
};
