import { css, SerializedStyles } from '@emotion/react';
import { COLOR } from '~/styles/const';

export const textareaStyle = (customCss?: SerializedStyles) => css`
  border: 1px solid ${COLOR.BORDER_GRAY};
  background-color: #fff;
  border-radius: 15px;
  text-align: left;
  padding: 7px 10px;
  &:focus {
    border: 1.5px solid rgba(255,153,0,0.7)};
  }
  ${customCss}
`;
