import { css, SerializedStyles } from '@emotion/react';
import { BREAKPOINT, COLOR, BORDER } from '../const';

// export禁止
const buttonBase = (marginTop?: number) => css`
  display: block;
  box-sizing: border-box;
  width: 80vw;
  max-width: 350px;
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
export const rippleButton = (marginTop?: number, isShadow?: boolean, customStyle?: SerializedStyles) => css`
  ${buttonBase(marginTop)};
  position: relative;
  overflow: hidden;
  color: #fff;
  background: ${COLOR.ORANGE};
  ${isShadow && `box-shadow: 0 1.2px 1px 1px ${BORDER.GRAY}`}; //x軸 y軸 ぼかし 広がり カラー;
  ${customStyle}
  @media (min-width: ${BREAKPOINT.MD}) {
  &:hover {
    background:  #f59300;
  }
`;