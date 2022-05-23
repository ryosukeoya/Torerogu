import { useState, VFC } from 'react';
// eslint-disable-next-line consistent-default-export-name/default-import-match-filename
import { PrimaryNavigationPresenter } from './Presenter';
import type { ContainerProps } from './types';
import { useRecoilState } from 'recoil';
import { mainTabIndexAtom } from '~/store/atoms';

interface LocalStateContainerProps extends ContainerProps {
  initialActiveIndex?: number;
}

export const LocalStateContainer: VFC<LocalStateContainerProps> = ({ initialActiveIndex, ...rest }) => {
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex ? initialActiveIndex : 0);
  return <PrimaryNavigationPresenter {...rest} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
};

export const GlobalStateContainer: VFC<ContainerProps> = ({ ...props }) => {
  const [activeIndex, setActiveIndex] = useRecoilState<number>(mainTabIndexAtom);
  return <PrimaryNavigationPresenter {...props} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
};
