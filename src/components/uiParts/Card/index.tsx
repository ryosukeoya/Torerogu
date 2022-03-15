import type { FC, PropsWithChildren } from 'react';
import { SerializedStyles } from '@emotion/react';
import { cardStyle } from './style';

type Props = {
  handleClick?: VoidFunction;
  customCss?: SerializedStyles;
  hoverTheme?: 'scale' | 'darken';
};

const Card: FC<PropsWithChildren<Props>> = ({ children, handleClick, customCss, hoverTheme }) => {
  return (
    <div onClick={handleClick && handleClick} css={cardStyle(customCss, hoverTheme)}>
      {children}
    </div>
  );
};

export default Card;
