import { css } from '@emotion/react';
import { COLOR, FONT } from '~/styles/const';

export const formStyle = {
  errorMessage: css`
    padding-top: 8px;
    min-height: 22px;
    font-size: ${FONT.SMALL};
    color: ${COLOR.RED};
  `,
  content: css`
    padding-bottom: 20px;
  `,
  contentTitle: css`
    display: flex;
    font-size: ${FONT.LARGE};
    padding-bottom: 10px;
  `,
  require: css`
    display: inline;
    /* width: 100px; */
    color: red;
    padding-left: 10px;
    font-size: ${FONT.BASE};
  `,
  unit: css`
    padding-left: 4px;
  `,
};
