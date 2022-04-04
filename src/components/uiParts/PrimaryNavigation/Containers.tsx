import { useState } from 'react';
import type { VFC } from 'react';
import PrimaryNavigationPresenter from './Presenter';
import { Theme, CustomCss } from './types';
import { useRecoilState } from 'recoil';
import { mainTabIndexAtom } from '~/store';

type Props = {
  titles: string[];
  theme: Theme;
  customCss?: CustomCss;
  options: { isToggle: boolean; isSwiper: boolean };
};

export const LocalStateContainer: VFC<Props> = ({ ...props }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return <PrimaryNavigationPresenter {...props} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
};

export const GlobalStateContainer: VFC<Props> = ({ ...props }) => {
  const [activeIndex, setActiveIndex] = useRecoilState<number>(mainTabIndexAtom);
  return <PrimaryNavigationPresenter {...props} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
};
