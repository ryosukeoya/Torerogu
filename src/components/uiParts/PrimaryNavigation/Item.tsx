import type { VFC, Dispatch } from 'react';
import { useIsActive } from '~/hooks';
import type { SetterOrUpdater } from 'recoil';
import { useGetItemCss } from './useGetCss';
import { Theme, CustomCss } from './types';
import { useRecoilValue } from 'recoil';
import { swiperAtom } from '~/store/atoms';

type Props = {
  title: string;
  index: number;
  activeIndex: number;
  setActiveIndex: SetterOrUpdater<number> | Dispatch<React.SetStateAction<number>>;
  theme: Theme;
  customCss?: CustomCss;
  options: { isToggle: boolean; isSwiper: boolean };
  backgroundColors?: string[];
};

const Item: VFC<Props> = ({ title, activeIndex, setActiveIndex, index, theme, customCss, options, backgroundColors }) => {
  const swiper = useRecoilValue(swiperAtom);
  const isActive = useIsActive(!!options.isToggle, activeIndex, index);

  const themeStyle = useGetItemCss(theme, isActive, backgroundColors?.[index]);


  return (
    <li
      onClick={() => {
        options.isSwiper && swiper?.slideTo(index);
        setActiveIndex(index);
      }}
      css={[themeStyle, customCss?.item]}
    >
      {title}
    </li>
  );
};

export default Item;
