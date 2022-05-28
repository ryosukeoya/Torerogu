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

  pc(pcStyle: SerializedStyles) {
    return css`
      @media screen and (min-width: ${BREAKPOINT.MD}px) and (min-height: 500px), (hover: hover) {
        ${pcStyle}
      }
    `;
  },
};
