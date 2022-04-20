import { FONT, COLOR } from '~/styles/const';
import { css, SerializedStyles } from '@emotion/react';
import { media } from '~/styles/shares';

export const tabStyles = {
  nav: (navWidth?: number, customCss?: SerializedStyles) => css`
    clear: both;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: #fff;
    position: static;
    border-bottom: none;
    ${customCss};
    ${media.pc(css`
      position: fixed;
      top: auto;
      left: auto;
      z-index: 2000;
      width: ${navWidth}px;
      border-bottom: 0.3px solid ${COLOR.BORDER_GRAY};
    `)}
  `,
  item: (isActive?: boolean): SerializedStyles => css`
    display: inline-block;
    color: ${isActive ? COLOR.ORANGE : 'black'};
    ${isActive && `border-bottom: 1px solid ${COLOR.ORANGE}`};
    padding: 15px;
    font-size: ${FONT.BASE};
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    ${media.pc(css`
      font-size: ${FONT.SMALL};
      &:first-of-type {
        border-right: 0.3px solid ${COLOR.BORDER_GRAY};
      }
    `)}
    @media (hover: hover) {
      &:hover {
        background-color: ${COLOR.HOVER_ORANGE};
      }
    }
  `,
};

export const roundStyles = {
  nav: css`
    display: flex;
    cursor: pointer;
    justify-content: center;
    margin-top: 20px;
  `,
  item: (isActive?: boolean,color = 'black', backgroundColor: string = COLOR.ORANGE) => css`
    color: ${color};
    text-align: center;
    padding: 10px;
    margin: 0 10px;
    border-radius: 20px;
    ${isActive && `color: #fff`};
    ${isActive && `background-color: ${backgroundColor}`};
    @media (hover: hover) {
      &:hover {
        color: #fff;
        background-color: ${backgroundColor};
      }
    }
  `,
};
