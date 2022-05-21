import { css } from '@emotion/react';
import { ModalSizeTheme } from './types';
import { media } from '~/styles/shares';

export const getModalSize = (size: ModalSizeTheme) => {
  switch (size) {
    case 'small':
      return small;
    case 'normal':
      return normal;
    case 'large':
      return large;
    default:
      throw new Error('wrong size given');
  }
};

const small = css`
  max-height: 450px;
  max-width: 450px;
  height: 75vw;
  width: 75vw;
  border-radius: 20px;
  padding: 20px;
`;

const normal = css`
  max-height: 500px;
  max-width: 500px;
  width: 93vw;
  height: 93vw;
  border-radius: 25px;
  padding: 30px;
  ${media.spHorizontal(
    css`
      max-height: 100vh;
    `,
  )}
`;

const large = css`
  max-height: 600px;
  max-width: 600px;
  height: 95vw;
  width: 95vw;
  border-radius: 30px;
  padding: 40px;
`;
