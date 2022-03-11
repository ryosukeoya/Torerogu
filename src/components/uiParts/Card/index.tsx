import type { FC, ReactChild } from 'react';
import { SerializedStyles } from '@emotion/react';
import { cardStyle } from './style';

type Props = {
  data: object;
  children: ReactChild;
  handleClick: (data: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  customCss?: SerializedStyles;
};

const Card: FC<Props> = ({ data, children, handleClick, customCss }) => {
  return (
    <div onClick={() => handleClick(data)} css={cardStyle(customCss)}>
      {children}
    </div>
  );
};

export default Card;
