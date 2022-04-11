import Link from 'next/link';
import type { VFC } from 'react';
import { ButtonTheme } from './types';
import { useCallback } from 'react';
import { simpleButton, toggleColorButton } from '~/styles/shares/likeButtons';
interface PropsBase<T extends 'isButton' | 'isLinkButton'> {
  type: T;
  title: string;
  theme: ButtonTheme;
}

interface ButtonProps extends PropsBase<'isButton'> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface LinkButtonProps extends PropsBase<'isLinkButton'> {
  href: string;
}

const PrimaryButton: VFC<ButtonProps | LinkButtonProps> = ({ title, theme, ...rest }) => {
  const themeCss = useGetTheme(theme);

  switch (rest.type) {
    case 'isButton':
      const { onClick } = rest;
      return (
        <button css={themeCss} onClick={onClick}>
          {title}
        </button>
      );
    case 'isLinkButton':
      const { href } = rest;
      return (
        <Link href={href} passHref>
          <a css={themeCss}>{title}</a>
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
