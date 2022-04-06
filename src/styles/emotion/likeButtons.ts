import { css, SerializedStyles } from '@emotion/react';
import { BREAKPOINT, COLOR } from '../const';

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
  @media (hover: hover) {
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
  @media (hover: hover) {
    &:hover {
      color: white;
      background-color: ${COLOR.ORANGE};
    }
  }
  ${customCss}
`;

// クリック時に波打つエフェクトを持つボタン用
export const rippleButton = (marginTop?: number, isShadow?: boolean, customStyleSP?: SerializedStyles, customStylePC?: SerializedStyles) => css`
  ${buttonBase(marginTop)};
  position: relative;
  overflow: hidden;
  color: #fff;
  background: ${COLOR.ORANGE};
  ${isShadow && `box-shadow: 0 1.2px 1px 1px ${COLOR.BORDER_GRAY}`}; //x軸 y軸 ぼかし 広がり カラー;
  ${customStyleSP}
  @media (min-width: ${BREAKPOINT.MD}px) {
    ${customStylePC};
  }
  @media (hover:hover) {
    &:hover {
      background:  ${COLOR.ORANGE}E6;

      transform: scale(1.008);
      box-shadow: 0 1.2px 5px 3.5px ${COLOR.BORDER_GRAY};
    }
`;
