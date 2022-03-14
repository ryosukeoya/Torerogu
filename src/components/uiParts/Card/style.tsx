import { css, SerializedStyles } from '@emotion/react';
import { COLOR, BORDER } from '../../../styles/const';

export const cardStyle = (customCss?: SerializedStyles) => css`
  background-color: #fff;
  box-shadow: 0 1px 1px 1px ${BORDER.GRAY}; //x軸 y軸 ぼかし 広がり カラー;
  text-align: center;
  border-radius: 10px;
  width: 90vw;
  margin: 0 auto;
  padding: 25px 15px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    /* background-color: ${COLOR.HOVER}; */
    background-color: #f8f8f8;
    box-shadow: 0 1px 2.5px 2.5px ${BORDER.GRAY}; //x軸 y軸 ぼかし 広がり カラー;
  }
  ${customCss};
`;
