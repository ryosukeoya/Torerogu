import { SerializedStyles } from '@emotion/react';

export type Theme = 'basicTab' | 'roundish';
export type CustomCss = { nav?: SerializedStyles; item?: SerializedStyles };
export type ContainerProps = {
  titles: string[] | null;
  theme: Theme;
  customCss?: CustomCss;
  options: { isToggle: boolean; isSwiper: boolean };
};
