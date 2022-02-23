import { css } from '@emotion/react';
import { COLOR } from '../../styles/const';

export const buttonStyle = (marginTop?:number) => css`
  display: block;
  width: 80vw;
  margin: 0 auto;
  margin-top: ${marginTop}px;
  text-align:center;
  color: white;
  background-color: ${COLOR.ORANGE};
  border-radius: 18px;
  padding: 10px;
  cursor:pointer;
  &:hover {
    opacity: 0.8;
  }
`;