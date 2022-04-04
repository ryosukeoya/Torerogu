import type { VFC, ReactNode, PropsWithChildren } from 'react';
import { SerializedStyles } from '@emotion/react';
import { cardStyle } from './style';
import { HoverTheme } from './types';

type Props = {
  handleClick?: VoidFunction;
  customCss?: SerializedStyles;
  hoverTheme?: HoverTheme;
  children: ReactNode;
};

const Card: VFC<PropsWithChildren<Props>> = ({ children, handleClick, customCss, hoverTheme }) => {
  return (
    <div onClick={handleClick && handleClick} css={cardStyle(customCss, hoverTheme)}>
      {children}
    </div>
  );
};

export default Card;