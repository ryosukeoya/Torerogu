import { css, SerializedStyles } from '@emotion/react';
import { BORDER } from '~/styles/const';

const disableDefaultStyle = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const selectStyle = (marginBottom?: number, customCss?: SerializedStyles) => css`
  ${disableDefaultStyle}
  color:black;
  width: 200px;
  border: 1px solid ${BORDER.GRAY};
  padding: 4px 10px;
  margin-bottom: ${marginBottom}px;
  background: url(/imgs/down-arrow.png) no-repeat right 10px center / 16px auto;
  ${customCss};
`;