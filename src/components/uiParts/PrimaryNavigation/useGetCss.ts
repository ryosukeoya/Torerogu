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

export const useGetItemCss = (theme: Theme, isActive?: boolean): SerializedStyles => {
  switch (theme) {
    case 'basicTab':
      return tabStyles.item(isActive);
    case 'roundish':
      return roundStyles.item(isActive);
    default:
      throw new Error('wrong theme given');
  }
};
5;
