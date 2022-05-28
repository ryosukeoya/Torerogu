import { css, SerializedStyles } from '@emotion/react';
import { BREAKPOINT } from '../const';

export const media = {
  spHorizontal(spHorizontalStyle: SerializedStyles) {
    return css`
      @media screen and (orientation: landscape) and (hover: none) {
        ${spHorizontalStyle}
      }
    `;
  },

  /* width >= 501px or hover */
  pc(pcStyle: SerializedStyles) {
    return css`
      @media screen and (min-width: ${BREAKPOINT.XSM + 1}px), (hover: hover) {
      /* @media screen and (min-width: 768px) and (min-height: 500px), (min-width: 768px) and (hover: hover) { */
        ${pcStyle}
      }
    `;
  },
};
