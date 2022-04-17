import { css } from '@emotion/react';
import { ModalSizeTheme } from './types';

const getModalSize = (size: ModalSizeTheme) => {
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

export default getModalSize;

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
  height: 80vw;
  width: 80vw;
  border-radius: 25px;
  padding: 30px;
`;

const large = css`
  max-height: 600px;
  max-width: 600px;
  height: 85vw;
  width: 85vw;
  border-radius: 30px;
  padding: 40px;
`;
