import { Theme } from './types';
import { SerializedStyles } from '@emotion/react';
import { headerTabStyles, roundStyle } from './styles';

export const useGetCss = (theme: Theme, customCss?: SerializedStyles): SerializedStyles => {
  switch (theme) {
    case 'basicTab':
      return headerTabStyles.nav(customCss);
    case 'roundish':
      return roundStyle.nav;
    default:
      throw new Error('wrong theme given');
  }
};

export const useGetItemCss = (theme: Theme, isActive?: boolean): SerializedStyles => {
  switch (theme) {
    case 'basicTab':
      return headerTabStyles.item(isActive);
    case 'roundish':
      return roundStyle.item(isActive);
    default:
      throw new Error('wrong theme given');
  }
};
