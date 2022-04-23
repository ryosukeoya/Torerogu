import { css } from '@emotion/react';

export const clearFix = css`
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const link = css`
  &:link {
    color: #0000ee;
    text-decoration: underline;
  }

  &:visited {
    color: #551a8b;
    text-decoration: underline;
  }

  &:hover {
  }

  &:active {
    color: #ff0000;
    text-decoration: underline;
  }
`;
