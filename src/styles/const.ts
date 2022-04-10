export { BREAKPOINT, COLOR, FONT, HEADER, NAVIGATION };

const BREAKPOINT: { [breakpoint: string]: number } = {
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

const COLOR = {
  RED: RED_HEX,
  ORANGE: ORANGE_HEX,
  HOVER_GRAY: '#f1f1f1',
  HOVER_ORANGE: `${ORANGE_HEX}1A`,
  HOVER_RED: `${RED_HEX}1A`,
  BORDER_GRAY: '#dddddd',
} as const;

const FONT = {
  X_SMALL: '11px',
  SMALL: '14px',
  BASE: '16px',
  LARGE: '18px',
  X1_LARGE: '20px',
  X2_LARGE: '32px',
} as const;

const HEADER = {
  HEIGUT: '103px',
} as const;

const NAVIGATION = {
  WIDTH: '200px',
} as const;
