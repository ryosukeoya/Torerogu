import { css } from '@emotion/react';
import { COLOR, BORDER } from '../../styles/const';

export const cardStyle = (mbValue?: number) => css`
  box-shadow: 0 1px 1px 1px ${BORDER.GRAY}; //x軸 y軸 ぼかし 広がり カラー;
  text-align: center;
  border-radius: 10px;
  width: 90vw;
  margin: 0 auto;
  margin-bottom: ${mbValue}px;
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${COLOR.HOVER};
  }
`;
