import Link from 'next/link';
import type { VFC } from 'react';
import { ButtonTheme } from './types';
import { useCallback } from 'react';
import { simpleButton, toggleColorButton } from '~/styles/emotion/likeButtons';
interface PropsBase<T extends 'isButton' | 'isLinkButton'> {
  type: T;
  text: string;
  theme: ButtonTheme;
}

interface ButtonProps extends PropsBase<'isButton'> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface LinkButtonProps extends PropsBase<'isLinkButton'> {
  href: string;
}

const PrimaryButton: VFC<ButtonProps | LinkButtonProps> = ({ text, theme, ...props }) => {
  const themeCss = useGetTheme(theme);

  switch (props.type) {
    case 'isButton':
      return <button css={themeCss}>{text}</button>;
    case 'isLinkButton':
      const { href } = props;
      return (
        <Link href={href} passHref>
          <a css={themeCss}>{text}</a>
        </Link>
      );
    default:
      return null;
  }
};

export default PrimaryButton;

const useGetTheme = (theme: ButtonTheme) => {
  const themeCss = useCallback(() => {
    if (theme === 'simple') {
      return simpleButton();
    } else if (theme === 'toggle') {
      return toggleColorButton();
    } else {
      return;
    }
  }, [theme]);
  return [themeCss];
};
