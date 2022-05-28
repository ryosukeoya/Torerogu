import type { VFC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  children: ReactNode;
};

export const Portal: VFC<Props> = ({ children }) => {
  if (!process.browser) return null;
  const element = document.querySelector('#portal');
  return element ? ReactDOM.createPortal(children, element) : null;
};
