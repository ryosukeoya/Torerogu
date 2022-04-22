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
  /* width <= 500px and not hover */
  sp(spStyle: SerializedStyles) {
    return css`
      @media screen and (max-width: ${BREAKPOINT.XSM}px) and (hover: none) {
        ${spStyle}
      }
    `;
  },
  /* width >= 501px or hover */
  pc(pcStyle: SerializedStyles) {
    return css`
      @media screen and (min-width: ${BREAKPOINT.XSM + 1}px), (hover: hover) {
        ${pcStyle}
      }
    `;
  },
};
