import type { VFC, Dispatch } from 'react';
import { useIsActive } from '~/hooks';
import type { SetterOrUpdater } from 'recoil';
import { useGetItemCss } from './useGetCss';
import { Theme, CustomCss } from './types';
import { useRecoilValue } from 'recoil';
import { swiperAtom } from '~/store';

type Props = {
  title: string;
  index: number;
  activeIndex: number;
  setActiveIndex: SetterOrUpdater<number> | Dispatch<React.SetStateAction<number>>;
  theme: Theme;
  customCss?: CustomCss;
  options: { isToggle: boolean; isSwiper: boolean };
};

const Item: VFC<Props> = ({ title, index, activeIndex, setActiveIndex, theme, customCss, options }) => {
  const swiper = useRecoilValue(swiperAtom);
  const isActive = useIsActive(!!options.isToggle, activeIndex, index);

  const themeStyle = useGetItemCss(theme, isActive);

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
