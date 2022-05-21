import type { VFC } from 'react';
import { css } from '@emotion/react';

type Props = {
  height: number;
};

export const Spacer: VFC<Props> = ({height}) => {
  return (
    <div
      css={css`
        height: ${height}px;
      `}
    ></div>
  );
};
