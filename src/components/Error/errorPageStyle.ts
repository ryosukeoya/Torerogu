import { css } from '@emotion/react';
import { FONT } from '~/styles/const';

export const errorPageStyle = {
  title: css`
    font-size: ${FONT.X1_LARGE};
    color: red;
    padding-bottom: 25px;
  `,
  explain: css`
    padding-bottom: 20px;
    line-height: 170%;
  `,
  paragraph: css`
    text-indent: 1em;
  `,
};
