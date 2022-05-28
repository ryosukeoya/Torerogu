export const BREAKPOINT: { [breakpoint: string]: number } = {
  XSM: 500,
  SM: 640,
  MD: 768,
  LG: 1024,
} as const;

/**
 * https://material.io/design/color/the-color-system.html#color-theme-creation
 * The color system
 */

// Primary color(A primary color is the color displayed most frequently across your app's screens and components.)
const RED_HEX = '#FF291B';
// Secondary color
const ORANGE_HEX = '#FF9900';

export const COLOR = {
  RED: RED_HEX,
  ORANGE: ORANGE_HEX,
  HOVER_GRAY: '#f1f1f1',
  HOVER_ORANGE: `${ORANGE_HEX}1A`,
  HOVER_RED: `${RED_HEX}1A`,
  BORDER_GRAY: '#dddddd',
} as const;

export const FONT = {
  X_SMALL: '11px',
  SMALL: '14px',
  BASE: '16px',
  LARGE: '18px',
  X1_LARGE: '20px',
  X2_LARGE: '32px',
} as const;

export const HEADER = {
  HEIGUT: '103px',
} as const;

export const NAVIGATION = {
  WIDTH: '170px',
  SMALL_WIDTH: '80px',
} as const;

export const FORM = {
  INPUT_AND_SELECT: { HEIGHT: '35px' },
};

export const CONTENT_AREA_PC_MIN_WIDTH_NUM = 800;

export const CONTENT_AREA = {
  PC_MIN_WIDTH: `${CONTENT_AREA_PC_MIN_WIDTH_NUM}px`,
} as const;

export const Z_INDEX = {
  PRIMARY_NAVIGATION: 100,
  NAVIGATION: 200,
  HEADER: 300,
  MODAL_BACKDROP: 400,
} as const;
