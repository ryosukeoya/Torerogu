import { FONT, COLOR, BREAKPOINT } from '~/styles/const';
import { css, SerializedStyles } from '@emotion/react';

export const tabStyles = {
  nav: (navWidth?: number, customCss?: SerializedStyles) => css`
    clear: both;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-bottom: 0.3px solid ${COLOR.BORDER_GRAY};
    background: #fff;
    ${customCss};
    @media (min-width: ${BREAKPOINT.MD}), (hover: hover) {
      position: fixed;
      top: auto;
      left: auto;
      z-index: 2000;
      width: ${navWidth}px;
    }
  `,
  item: (isActive?: boolean): SerializedStyles => css`
    color: ${isActive ? COLOR.ORANGE : 'black'};
    border-bottom: 1px solid ${isActive ? COLOR.ORANGE : '#fff'};
    padding: 15px;
    font-size: ${FONT.BASE};
    background-color: #fff;
    text-align: center;
    cursor: pointer;
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
