import { SerializedStyles } from '@emotion/react';
import type { PageCategoryNames } from '~/types/app';

export type Theme = 'basicTab' | 'roundish';
export type CustomCss = { nav?: SerializedStyles; item?: SerializedStyles };
export type ContainerProps = {
  titles: string[] | PageCategoryNames | null;
  theme: Theme;
  customCss?: CustomCss;
  options: { isToggle: boolean; isSwiper: boolean };
  width?: number | undefined;
  colors?: string[];
  backgroundColors?: string[];
  backgroundColorsAtHover?: string[];
};
