import { css, keyframes } from '@emotion/react';

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

export const ripple = {
  ripple: css`
    display: block;
    width: 100px;
    height: 100px;
    position: absolute;
    background: #ffbb54;
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
