import { css, keyframes, SerializedStyles } from '@emotion/react';
import { BREAKPOINT, COLOR } from '~/styles/const';
import { buttonBase } from '~/styles/share/likeButton';

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
    @media (min-width: ${BREAKPOINT.MD}) {
    &:hover {
      background:  #f59300;
    }
  `,
  ripple: css`
    display: block;
    width: 100px;
    height: 100px;
    position: absolute;
    /* top: 50%;
    left: 50%; */
    background: #fa9a09;
    /* background: red; */
    background: #ffb64a;
    content: '';
    border-radius: 50%;
    opacity: 1;
    animation: 3s ease 1 forwards ${rippleEffect};
  `,
  content: css`
    position: relative;
    z-index: 2;
  `,
};
