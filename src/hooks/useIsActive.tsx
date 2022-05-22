import { useState, useEffect } from 'react';

export const useIsActive = (isToggle: boolean, activeIndex: number, index: number) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    index === activeIndex && setIsActive(true);
    if (isToggle && index === activeIndex) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isToggle, index, activeIndex]);

  return isActive;
};
