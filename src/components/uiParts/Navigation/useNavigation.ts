import { useState, useCallback } from 'react';

export const useNavigation = (initialState: number) => {
  const [activeIndex, setActiveIndex] = useState<number>(initialState);

  const changeActiveIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);
  //   return [activeIndex, changeActiveIndex];
  return { activeIndex, changeActiveIndex };
};
