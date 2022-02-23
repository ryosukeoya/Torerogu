import { css, SerializedStyles } from '@emotion/react';
import { BORDER, COLOR, FONT } from '../../styles/const';

export const styles = {
  header: css`
    position: fixed;
    top: 0;
    z-index: 1000;
    background: #fff;
    width: 100vw;
    border-bottom: 1px solid ${BORDER.GRAY};
    padding: 10px 25px 0 25px;
  `,
  area: css`
    text-align: center;
  `,
  title: css`
    font-size: ${FONT.X2_LARGE};
    color: ${COLOR.RED};
    display: inline-block;
  `,
  profile: css`
    float: right;
    border-radius: 50%;
    background-color: #b6babb;
    padding: 8px;
  `,
  tabs: css`
    clear: both;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  `,
  tab: (isActive?: boolean): SerializedStyles => css`
    color: ${isActive ? COLOR.ORANGE : 'black'};
    ${isActive && `border-bottom:1px solid ${COLOR.ORANGE}`};
    padding: 20px 15px 20px 15px;
    font-size: ${FONT.BASE};
  `,
};
