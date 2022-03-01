import type { VFC } from 'react';
import { css } from '@emotion/react';

type Props = {
  height: number;
};

const Space: VFC<Props> = (props) => {
  return (
    <div
      css={css`
        height: ${props.height}px;
      `}
    ></div>
  );
};

export default Space;
