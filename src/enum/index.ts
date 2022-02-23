export const getIndex = (pathName: string): number => {
  switch (pathName) {
    case '/':
      return 0;
    case '/plan':
      return 1;
    case '/record':
      return 2;
    case 'graph':
      return 3;
    default:
      return 0;
  }
};
