import { FONT, COLOR, BREAKPOINT } from '~/styles/const';
import { css, SerializedStyles } from '@emotion/react';

export const tabStyles = {
  nav: (navWidth?: number, customCss?: SerializedStyles) => css`
    clear: both;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-bottom: 0.3px solid ${COLOR.BORDER_GRAY};
    background-color: #fff;
    position: static;
    ${customCss};
    @media (min-width: ${BREAKPOINT.MD}px) {
      position: fixed;
      top: auto;
      left: auto;
      z-index: 2000;
      width: ${navWidth}px;
    }
  `,
  item: (isActive?: boolean): SerializedStyles => css`
    color: ${isActive ? COLOR.ORANGE : 'black'};
    ${isActive && `border-bottom: 1px solid ${COLOR.ORANGE}`};
    padding: 15px;
    font-size: ${FONT.BASE};
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    // TODO:リファ
    @media not all and (hover: hover) {
      ${isActive && `border-bottom: 1px solid ${COLOR.ORANGE}`};
      ${!isActive && `border-bottom: 0.3px solid ${COLOR.BORDER_GRAY}`};
    }
    @media (min-width: ${BREAKPOINT.MD}px), (hover: hover) {
      font-size: ${FONT.SMALL};
    }
    @media (min-width: ${BREAKPOINT.MD}px) {
      &:first-child {
        border-right: 0.3px solid ${COLOR.BORDER_GRAY};
      }
    }
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
  item: (isActive?: boolean) => css`
    text-align: center;
    padding: 10px;
    margin: 0 10px;
    ${isActive && `color: #fff`};
    ${isActive && `background-color: ${COLOR.ORANGE}`};
    ${isActive && `border-radius: 20px`};
  `,
};
