import { css } from '@emotion/react';
import { FONT } from '../const';
import { media } from '~/styles/shares';

export const pageTemplate = {
  contentArea: css`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 170px);
    width: 90%;
    margin: 0 auto;
    padding-top: 30px;
    ${media.pc(
      css`
        min-height: auto;
        padding: 30px 0 0 50px;
        margin-top: 47px;
      `,
    )}
  `,
  title: css`
    padding-bottom: 50px;
    font-size: ${FONT.X1_LARGE};
    ${media.pc(css`
      padding-bottom: 55px;
    `)}
  `,
  back: css`
    display: inline-block;
    color: #5959eb;
    padding: 20px 20px 20px 0px;
    margin-top: 10px;
    font-size: ${FONT.BASE};
    cursor: pointer;
    @media (hover: hover) {
      &:hover {
        opacity: 0.8;
      }
    }
  `,
};
