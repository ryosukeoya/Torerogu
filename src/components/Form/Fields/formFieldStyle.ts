import { css } from '@emotion/react';
import { COLOR, FONT } from '~/styles/const';

export const formFieldStyle = {
  errorMessage: css`
    padding-top: 8px;
    min-height: 22px;
    font-size: ${FONT.SMALL};
    color: ${COLOR.RED};
  `,
  content: (custom?: { paddingBottom: number }) => css`
    padding-bottom: ${!custom?.paddingBottom ? '20px' : `${custom.paddingBottom}px`};
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
