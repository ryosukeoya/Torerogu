import { useState } from 'react';
import type { VFC } from 'react';
import PrimaryNavigationPresenter from './Presenter';
import type { ContainerProps } from './types';
import { useRecoilState } from 'recoil';
import { mainTabIndexAtom } from '~/store';

export const LocalStateContainer: VFC<ContainerProps> = ({ ...props }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return <PrimaryNavigationPresenter {...props} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
};

export const GlobalStateContainer: VFC<ContainerProps> = ({ ...props }) => {
  const [activeIndex, setActiveIndex] = useRecoilState<number>(mainTabIndexAtom);
  return <PrimaryNavigationPresenter {...props} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
};
