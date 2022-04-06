import type { VFC, ReactNode } from 'react';
import { rippleButton } from '~/styles/emotion/likeButtons';
import { ripple } from '~/styles/emotion/ripple';
import { useRipple } from '~/hooks';

type Props = {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const RippleButton: VFC<Props> = ({ children, onClick }) => {
  const [coords, setCoords, isRippling] = useRipple(300);

  return (
    <button
      css={rippleButton()}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick(e);
      }}
    >
      {isRippling ? (
        <span
          css={ripple.ripple('#ffbb54')}
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ''
      )}
      <span css={ripple.content}>{children}</span>
    </button>
  );
};

export default RippleButton;
