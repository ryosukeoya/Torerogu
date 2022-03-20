import { css, SerializedStyles } from '@emotion/react';
import { BREAKPOINT, COLOR } from '../const';

// export禁止
const buttonBase = (marginTop?: number) => css`
  display: block;
  box-sizing: border-box;
  width: 80vw;
  padding: 13px 0;
  margin: 0 auto;
  text-align: center;
  border-radius: 22px;
  border: none;
  margin-top: ${marginTop}px;
  cursor: pointer;
`;

// hover時は少し透明になる基本のボタン
export const simpleButton = (marginTop?: number, customCss?: SerializedStyles) => css`
  ${buttonBase(marginTop)};
  color: white;
  background-color: ${COLOR.ORANGE};
  @media (min-width: ${BREAKPOINT.MD}) {
    &:hover {
      opacity: 0.8;
    }
  }
  ${customCss}
`;

//　hoverでボタンの文字色と背景の色が切り替わる
export const toggleColorButton = (marginTop?: number, customCss?: SerializedStyles) => css`
  ${buttonBase(marginTop)};
  color: ${COLOR.ORANGE};
  background-color: white;
  border: 1px solid ${COLOR.ORANGE};
  @media (min-width: ${BREAKPOINT.MD}) {
    &:hover {
      color: white;
      background-color: ${COLOR.ORANGE};
    }
  }
  ${customCss}
`;

// クリック時に波打つエフェクトを持つボタン用
export const rippleButton = (marginTop?: number, customStyle?: SerializedStyles) => css`
  ${buttonBase(marginTop)};
  background: ${COLOR.ORANGE};
  color: #fff;
  overflow: hidden;
  position: relative;
  ${customStyle}
  @media (min-width: ${BREAKPOINT.MD}) {
  &:hover {
    background:  #f59300;
  }
`;
