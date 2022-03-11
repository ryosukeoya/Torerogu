import type { FC, PropsWithChildren } from 'react';
import { SerializedStyles } from '@emotion/react';
import { cardStyle } from './style';

type Props = {
  handleClick?: VoidFunction;
  customCss?: SerializedStyles;
};

const Card: FC<PropsWithChildren<Props>> = ({ children, handleClick, customCss }) => {
  return (
    <div onClick={handleClick && handleClick} css={cardStyle(customCss)}>
      {children}
    </div>
  );
};

export default Card;
