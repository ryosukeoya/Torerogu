import { css } from '@emotion/react';
import { COLOR } from '../../../styles/const';

export const sliderStyle = {
  sliders: (mbValue?:number) => css`
    margin-bottom: ${mbValue}px;
  `,
  slider: css`
    text-align: center;
    background-color: ${COLOR.ORANGE};
    padding: 40px 0;
    color: white;
  `,
};
