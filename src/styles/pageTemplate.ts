import { css } from '@emotion/react';
import { BREAKPOINT, FONT, COLOR } from './const';

export const pageTemplate = {
  contentArea: css`
    min-height: calc(100vh - 170px);
    width: 90vw;
    margin: 0 auto;
    padding-top: 30px;
  `,
  title: css`
    padding-bottom: 20px;
    font-size: ${FONT.X1_LARGE};
  `,
  content: css`
    padding-bottom: 15px;
  `,
  contentTitle: css`
    font-size: ${FONT.LARGE};
    padding-bottom: 10px;
  `,
  require: css`
    color: red;
    padding-left: 10px;
    font-size: ${FONT.BASE};
  `,
  unit: css`
    padding-left: 4px;
  `,
  errorMessage: css`
    padding-top: 8px;
    font-size: ${FONT.SMALL};
    color: ${COLOR.RED};
  `,
  back: css`
    display: inline-block;
    color: #5959eb;
    padding: 20px 20px 20px 0px;
    margin-top: 10px;
    font-size: ${FONT.BASE};
    cursor: pointer;
    @media (min-width: ${BREAKPOINT.MD}) {
      &:hover {
        opacity: 0.8;
      }
    }
  `,
};
