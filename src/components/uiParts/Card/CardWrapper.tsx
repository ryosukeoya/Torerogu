import type { VFC, ReactNode, PropsWithChildren } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { HoverTheme } from './types';
import { BREAKPOINT, COLOR } from '~/styles/const';

type Props = {
  handleClick?: VoidFunction;
  customCardCss?: SerializedStyles;
  hoverTheme?: HoverTheme;
  children: ReactNode;
};

const CardWrapper: VFC<PropsWithChildren<Props>> = ({ children, handleClick, customCardCss, hoverTheme }) => {
  return (
    <div onClick={handleClick && handleClick} css={[cardStyle(hoverTheme), customCardCss]}>
      {children}
    </div>
  );
};

export default CardWrapper;

const darkenHover = css`
  &:hover {
    @media (min-width: ${BREAKPOINT.MD}px) {
      background-color: ${COLOR.HOVER_GRAY};
    }
  }
`;

const scaleHover = css`
  &:hover {
    @media (min-width: ${BREAKPOINT.MD}px) {
      transition: all 0.3s;
      transform: scale(1.013);
      box-shadow: 0 1.2px 3.8px 1.5px #c4c4c4;
    }
  }
`;

const cardStyle = (hoverTheme: HoverTheme = 'scale') => css`
  background-color: #fff;
  box-shadow: 0 1px 1px 1px ${COLOR.BORDER_GRAY}; //x軸 y軸 ぼかし 広がり カラー;
  text-align: center;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 25px 15px;
  cursor: pointer;
  ${hoverTheme === 'darken' && darkenHover};
  ${hoverTheme === 'scale' && scaleHover};
`;
