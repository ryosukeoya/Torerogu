import { useCallback } from 'react';
import { simpleButton, toggleColorButton } from '~/styles/share/likeButtons';
import { ButtonTheme } from './types';

export const useGetTheme = (theme: ButtonTheme) => {
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
