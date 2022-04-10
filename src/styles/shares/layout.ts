import { css, SerializedStyles } from '@emotion/react';
import { BREAKPOINT } from '../const';

export const layout = {
  /* width <= 500px and not hover */
  sp: (style: SerializedStyles) => css`
    @media (max-width: ${BREAKPOINT.XSM}px) and (hover: none) {
      ${style}
    }
  `,
  /* width >= 501px or hover */
  pc: (style: SerializedStyles) => css`
    @media (min-width: ${BREAKPOINT.XSM + 1}px), (hover: hover) {
      ${style}
    }
  `,
};
