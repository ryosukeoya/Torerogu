import type { VFC } from 'react';
import NavItem from './Item';
import { useGetCss } from './useGetCss';
import { Theme, CustomCss } from './types';
import { SetterOrUpdater } from 'recoil';

type Props = {
  titles: string[];
  theme: Theme;
  customCss?: CustomCss;
  options: { isToggle: boolean; isSwiper: boolean };
  activeIndex: number;
  setActiveIndex: SetterOrUpdater<number>;
};

const PrimaryNavigation: VFC<Props> = ({ titles, theme, customCss, options, activeIndex, setActiveIndex }) => {
  const themeStyle = useGetCss(theme);

  return (
    <ul css={[themeStyle, customCss?.nav]}>
      {titles?.map((title: string, i: number) => {
        return <NavItem key={i} options={options} setActiveIndex={setActiveIndex} index={i} activeIndex={activeIndex} title={title} theme={theme} customCss={customCss} />;
      })}
    </ul>
  );
};

export default PrimaryNavigation;
