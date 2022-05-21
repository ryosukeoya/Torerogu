import type { VFC, Dispatch } from 'react';
import { useIsActive } from '~/hooks';
import { useRecoilValue, SetterOrUpdater, useSetRecoilState } from 'recoil';
import { useGetItemCss } from './useGetCss';
import { Theme, CustomCss } from './types';
import { swiperAtom, pageIndexAtom } from '~/store/atoms';

type Props = {
  title: string;
  index: number;
  activeIndex: number;
  setActiveIndex: SetterOrUpdater<number> | Dispatch<React.SetStateAction<number>>;
  theme: Theme;
  customCss?: CustomCss;
  options: { isToggle: boolean; isSwiper: boolean };
  colors?: string[];
  backgroundColors?: string[];
  backgroundColorsAtHover?: string[];
};

export const Item: VFC<Props> = ({ title, activeIndex, setActiveIndex, index, theme, customCss, options, colors, backgroundColors, backgroundColorsAtHover }) => {
  const swiper = useRecoilValue(swiperAtom);
  const setPageIndex = useSetRecoilState(pageIndexAtom);
  const isActive = useIsActive(!!options.isToggle, activeIndex, index);

  const themeStyle = useGetItemCss(theme, isActive, colors?.[index], backgroundColors?.[index], backgroundColorsAtHover?.[index]);

  return (
    <li
      onClick={() => {
        options.isSwiper && swiper?.slideTo(index);
        setActiveIndex(index);
        setPageIndex(index);
      }}
      css={[themeStyle, customCss?.item]}
    >
      {title}
    </li>
  );
};
