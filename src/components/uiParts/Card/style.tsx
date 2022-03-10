import { css, SerializedStyles } from '@emotion/react';
import { COLOR, BORDER } from '../../../styles/const';

export const cardStyle = (marginBottom?: number, customCss?: SerializedStyles) => css`
  background-color: #fff;
  box-shadow: 0 1px 1px 1px ${BORDER.GRAY}; //x軸 y軸 ぼかし 広がり カラー;
  text-align: center;
  border-radius: 10px;
  width: 90vw;
  margin: 0 auto;
  margin-bottom: ${marginBottom}px;
  padding: 25px 15px;
  cursor: pointer;
  &:hover {
    background-color: ${COLOR.HOVER};
  }
  ${customCss};
`;
