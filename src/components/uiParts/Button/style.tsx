import { css } from '@emotion/react';
import { COLOR } from '../../../styles/const';

const buttonBase = (marginTop?: number) => css`
  display: block;
  width: 80vw;
  margin: 0 auto;
  text-align: center;
  border-radius: 18px;
  padding: 10px;
  margin-top: ${marginTop}px;
  cursor: pointer;
`;

export const simpleButton = (marginTop?: number) => css`
  ${buttonBase(marginTop)};
  color: white;
  background-color: ${COLOR.ORANGE};
  &:hover {
    opacity: 0.8;
  }
`;

export const toggleColorButton = (marginTop?: number) => css`
  ${buttonBase(marginTop)};
  color: ${COLOR.ORANGE};
  background-color: white;
  border: 1px solid ${COLOR.ORANGE};
  &:hover {
    color: white;
    background-color: ${COLOR.ORANGE};
  }
`;
