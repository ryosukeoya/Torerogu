import { VFC } from 'react';
import { css } from '@emotion/react';
import { Tab } from './Tab';
import { SetterOrUpdater } from 'recoil';

type Props = {
  titles: string[];
  activeIndex: number;
  setActiveIndex: SetterOrUpdater<number>;
  colors?: string[];
  backgroundColors?: string[];
  backgroundColorsAtHover?: string[];
};

export const PrimaryNavigationPresenter: VFC<Props> = ({ titles, activeIndex, setActiveIndex, colors, backgroundColors, backgroundColorsAtHover }) => {
  return (
    <ul css={styles.nav}>
      {titles?.map((title: string, i: number) => {
        return (
          <Tab key={i} index={i} activeIndex={activeIndex} setActiveIndex={setActiveIndex} color={colors?.[i]} backgroundColor={backgroundColors?.[i]} backgroundColorAtHover={backgroundColorsAtHover?.[i]}>
            {title}
          </Tab>
        );
      })}
    </ul>
  );
};

const styles = {
  nav: css`
    display: flex;
    cursor: pointer;
    justify-content: center;
    margin-top: 20px;
  `,
};