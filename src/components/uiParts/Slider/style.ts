import { css } from '@emotion/react';
import { COLOR, FONT } from '~/styles/const';

export const sliderStyle = {
  sliders: (marginBottom?: number) => css`
    margin-bottom: ${marginBottom}px;
  `,
  slider: (isActive: boolean) => css`
    font-size: ${FONT.LARGE};
    text-align: center;
    background-color: ${COLOR.ORANGE};
    padding: 40px 0;
    margin-top: 10px;
    ${isActive ? `color:${COLOR.RED}` : 'color:white'};
    border-radius: 20px;
    cursor: pointer;
  `,
};
