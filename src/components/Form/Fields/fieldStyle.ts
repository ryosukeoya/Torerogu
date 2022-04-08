import { css } from '@emotion/react';
import { COLOR, FONT } from '~/styles/const';

export const fieldStyle = {
  errorMessage: css`
    padding-top: 8px;
    min-height: 22px;
    font-size: ${FONT.SMALL};
    color: ${COLOR.RED};
  `,
  require: css`
    display: inline;
    /* width: 100px; */
    color: red;
    padding-left: 10px;
    font-size: ${FONT.BASE};
  `,
};
