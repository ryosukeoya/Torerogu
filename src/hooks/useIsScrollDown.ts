import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

const useIsScrollDown = () => {
  const [position, setPosition] = useState(process.browser && window.pageYOffset);
  const [isScrollDown, setIsScrollDown] = useState(false);

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        const moving = window.pageYOffset;

        setIsScrollDown(moving > position);
        setPosition(moving);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  });
  return isScrollDown;
};

export default useIsScrollDown;
