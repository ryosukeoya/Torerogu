import { css, SerializedStyles } from '@emotion/react';
import { COLOR, BORDER } from '../../../styles/const';

export const cardStyle = (customCss?: SerializedStyles, hoverTheme: 'shadow' | 'darken' = 'darken') => css`
  background-color: #fff;
  box-shadow: 0 1px 1px 1px ${BORDER.GRAY}; //x軸 y軸 ぼかし 広がり カラー;
  text-align: center;
  border-radius: 10px;
  width: 90vw;
  margin: 0 auto;
  padding: 25px 15px;
  cursor: pointer;
  ${hoverTheme === 'shadow' && 'transition: all 0.3s'};
  &:hover {
    ${hoverTheme === 'darken' && `background-color: ${COLOR.HOVER}`};
    ${hoverTheme === 'shadow' && 'box-shadow: 0 1.5px 6px 3.5px #c4c4c4'};
  }
  ${customCss};
`;
