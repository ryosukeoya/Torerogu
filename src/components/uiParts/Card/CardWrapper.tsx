import type { VFC, ReactNode, PropsWithChildren } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { HoverTheme } from './types';
import { BREAKPOINT, COLOR } from '~/styles/const';

type Props = {
  handleClick?: VoidFunction;
  customCss?: SerializedStyles;
  hoverTheme?: HoverTheme;
  children: ReactNode;
};

const CardWrapper: VFC<PropsWithChildren<Props>> = ({ children, handleClick, customCss, hoverTheme }) => {
  return (
    <div onClick={handleClick && handleClick} css={cardStyle(customCss, hoverTheme)}>
      {children}
    </div>
  );
};

export default CardWrapper;

const cardStyle = (customCss?: SerializedStyles, hoverTheme: HoverTheme = 'scale') => css`
  background-color: #fff;
  box-shadow: 0 1px 1px 1px ${COLOR.BORDER_GRAY}; //x軸 y軸 ぼかし 広がり カラー;
  text-align: center;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 25px 15px;
  cursor: pointer;
  ${hoverTheme === 'scale' && 'transition: all 0.3s'};
  @media (min-width: ${BREAKPOINT.MD}px) {
    &:hover {
      ${hoverTheme === 'darken' && `background-color: ${COLOR.HOVER_GRAY}`};
      ${hoverTheme === 'scale' && `transform: scale(1.013);`};
      ${hoverTheme === 'scale' && 'box-shadow: 0 1.2px 3.8px 1.5px #c4c4c4'};
    }
  }
  ${customCss};
`;
