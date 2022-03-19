export const getCustomCss = (pageIndex: number) => {
  if (pageIndex !== 0) {
    return { left: `calc(${pageIndex}00vw + 8px)`, right: `calc(-${pageIndex}00vw + 8px)` };
  } else {
    return null;
  }
};