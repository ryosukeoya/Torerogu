const BREAKPOINT = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
} as const;

/**
 * https://material.io/design/color/the-color-system.html#color-theme-creation
 * The color system
 */

const RED_HEX = '#FF291B';
const ORANGE_HEX = '#FF9900';

const COLOR = {
  // Primary color(A primary color is the color displayed most frequently across your app's screens and components.)
  RED: RED_HEX,
  // Secondary color
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

export { BREAKPOINT, COLOR, FONT };
