import { useState, useEffect } from 'react';

const useIsScrollDown = () => {
  const [position, setPosition] = useState(process.browser && window.pageYOffset);
  const [isScrollDown, setIsScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;

      setIsScrollDown(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return isScrollDown;
};

export default useIsScrollDown;
