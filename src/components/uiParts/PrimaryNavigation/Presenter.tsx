// eslint-disable-next-line consistent-default-export-name/default-export-match-filename
import type { VFC } from 'react';
import { Item } from './Item';
import { useGetCss } from './useGetCss';
import { ContainerProps } from './types';
import { SetterOrUpdater } from 'recoil';

interface Props extends ContainerProps {
  activeIndex: number;
  setActiveIndex: SetterOrUpdater<number>;
}

export const PrimaryNavigationPresenter: VFC<Props> = ({ titles, theme, customCss, width, ...rest }) => {
  const themeStyle = useGetCss(theme, width);

  return (
    <ul css={[themeStyle, customCss?.nav]}>
      {titles?.map((title: string, i: number) => {
        return <Item key={i} {...rest} index={i} title={title} theme={theme} customCss={customCss} />;
      })}
    </ul>
  );
};
