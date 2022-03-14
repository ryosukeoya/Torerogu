import Link from 'next/link';
import type { VFC } from 'react';
import { useGetTheme } from './useGetTheme';

interface PropsBase<T extends 'isButton' | 'isLinkButton'> {
  type: T;
  text: string;
  theme: 'simple' | 'toggle';
}
interface ButtonProps extends PropsBase<'isButton'> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface LinkButtonProps extends PropsBase<'isLinkButton'> {
  href: string;
}

const PrimaryButton: VFC<ButtonProps | LinkButtonProps> = (props) => {
  const themeCss = useGetTheme(props.theme);

  switch (props.type) {
    case 'isButton':
      return <button css={themeCss}>{props.text}</button>;
    case 'isLinkButton':
      return (
        <Link href={props.href} passHref>
          <a css={themeCss}>{props.text}</a>
        </Link>
      );
    default:
      return null;
  }
};

export default PrimaryButton;
