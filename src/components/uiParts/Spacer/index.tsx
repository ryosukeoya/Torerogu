import type { VFC } from 'react';
import { css } from '@emotion/react';

type Props = {
  height: number;
};

const Space: VFC<Props> = ({height}) => {
  return (
    <div
      css={css`
        height: ${height}px;
      `}
    ></div>
  );
};

export default Space;
