import { useCallback } from 'react';
import { simpleButton, toggleColorButton } from '../../../styles/share/buttonLike';

export const useGetTheme = (theme: string) => {
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
