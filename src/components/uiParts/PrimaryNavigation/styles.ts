import { FONT, COLOR } from '~/styles/const';
import { css, SerializedStyles } from '@emotion/react';

export const headerTabStyles = {
  nav: (customCss?: SerializedStyles) => css`
    clear: both;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-bottom: 0.3px solid ${COLOR.BORDER_GRAY};
    ${customCss};
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

// TODO:リファ
export const roundStyle = {
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
