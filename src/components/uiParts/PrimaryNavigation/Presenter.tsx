// eslint-disable-next-line consistent-default-export-name/default-export-match-filename
import type { VFC } from 'react';
import Item from './Item';
import { useGetCss } from './useGetCss';
import { ContainerProps } from './types';
import { SetterOrUpdater } from 'recoil';

interface Props extends ContainerProps {
  activeIndex: number;
  setActiveIndex: SetterOrUpdater<number>;
}

const PrimaryNavigationPresenter: VFC<Props> = ({ titles, theme, customCss, options, activeIndex, setActiveIndex, width }) => {
  const themeStyle = useGetCss(theme, width);

  return (
    <ul css={[themeStyle, customCss?.nav]}>
      {titles?.map((title: string, i: number) => {
        return <Item key={i} options={options} setActiveIndex={setActiveIndex} index={i} activeIndex={activeIndex} title={title} theme={theme} customCss={customCss} />;
      })}
    </ul>
  );
};

export default PrimaryNavigationPresenter;
