import { Theme } from './types';
import { SerializedStyles } from '@emotion/react';
import { tabStyles, roundStyles } from './styles';

export const useGetCss = (theme: Theme, width?: number, customCss?: SerializedStyles): SerializedStyles => {
  switch (theme) {
    case 'basicTab':
      return tabStyles.nav(width, customCss);
    case 'roundish':
      return roundStyles.nav;
    default:
      throw new Error('wrong theme given');
  }
};

// eslint-disable-next-line max-params
export const useGetItemCss = (theme: Theme, isActive?: boolean, color?: string, backgroundColor?: string, backgroundColorAtHover?: string): SerializedStyles => {
  switch (theme) {
    case 'basicTab':
      return tabStyles.item(isActive);
    case 'roundish':
      return roundStyles.item(isActive, color, backgroundColor, backgroundColorAtHover);
    default:
      throw new Error('wrong theme given');
  }
};
