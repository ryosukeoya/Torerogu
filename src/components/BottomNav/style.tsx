import { css, SerializedStyles } from '@emotion/react';
import { BORDER, COLOR } from '../../styles/const';

export const styles = {
  bottomNav: css`
    box-size: border-box;
    position: fixed;
    bottom: 0;
    z-index:1000;
    background:white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 65px;
    border-top: 1px solid ${BORDER.GRAY};,
  `,
  box: css`
    display: block;
    text-align: center;
  `,
  title: (isActive?: boolean): SerializedStyles => css`
    color: ${isActive ? COLOR.RED : 'black'};
    padding-top: 5px;
    font-size: 11px;
  `,
};

export const CONST = {
  ICON: {
    HEIGHT: '28px',
    WIDTH: '28px',
  },
  ICON_ALT: {
    HOME: 'ホーム',
    PLAN: '計画',
    RECORD: '記録',
    GRAPH: 'グラフ',
  },
};
