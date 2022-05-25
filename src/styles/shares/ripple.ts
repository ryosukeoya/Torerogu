import { css, keyframes } from '@emotion/react';
import { baseLookLikeButton } from './baseLookLikeButton';
import { COLOR } from '~/styles/const';

// クリック時に波打つエフェクトを持つWrapper
export const rippleWrapper = (marginTop?: number, isShadow?: boolean) => css`
  ${baseLookLikeButton};
  position: relative;
  z-index: 1;
  overflow: hidden;
  color: #fff;
  background: ${COLOR.ORANGE};
  margin-top: ${marginTop};
  ${isShadow && `box-shadow: 0 1.2px 1px 1px ${COLOR.BORDER_GRAY}`}; //x軸 y軸 ぼかし 広がり カラー;
  @media (hover: hover) {
    &:hover {
      background: ${COLOR.ORANGE}E6;
      transform: scale(1.008);
      box-shadow: 0 1.2px 5px 3.5px ${COLOR.BORDER_GRAY};
    }
  }
`;

export const ripple = {
  ripple: (colorCode: string) => css`
    width: 100px;
    height: 100px;
    position: absolute;
    background: #ffbb54;
    background: ${colorCode};
    content: '';
    border-radius: 50%;
    opacity: 1;
    animation: 3s ease 1 forwards ${rippleEffect};
  `,
  content: css`
    position: relative;
    z-index: 1;
  `,
};

const rippleEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(30);
    opacity: 0.375;
  }
  100% {
    transform: scale(100);
    opacity: 0;
  }
`;
