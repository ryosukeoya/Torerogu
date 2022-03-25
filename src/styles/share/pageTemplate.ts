import { css } from '@emotion/react';
import { BREAKPOINT, FONT } from '../const';

export const pageTemplate = {
  contentArea: css`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 170px);
    width: 90%;
    margin: 0 auto;
    padding-top: 30px;
    @media (min-width: ${BREAKPOINT.MD}) {
      padding: 30px 0 0 50px;
    }
  `,
  title: css`
    padding-bottom: 50px;
    font-size: ${FONT.X1_LARGE};
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
