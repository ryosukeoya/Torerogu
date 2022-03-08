import { css, keyframes, SerializedStyles } from '@emotion/react';
import { COLOR } from '../../../styles/const';
import { buttonBase } from '../../_styles';

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

export const rippleButton = {
  rippleButton: (customStyle?: SerializedStyles) => css`
    ${buttonBase(30)};
    background: ${COLOR.ORANGE};
    color: #fff;
    overflow: hidden;
    position: relative;
    ${customStyle}
    &:hover {
      background:  #f59300;
  `,
  ripple: css`
    width: 100px;
    height: 100px;
    position: absolute;
    background: #fa9a09;
    display: block;
    content: '';
    border-radius: 50%;
    opacity: 1;
    animation: 3.0s ease 1 forwards ${rippleEffect};
  `,
  content: css`
    position: relative;
    z-index: 2;
  `,
};
