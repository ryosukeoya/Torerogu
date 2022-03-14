import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getPathIndex } from '../enum';

const usePathIndex = () => {
  const router = useRouter();
  const pathIndex = getPathIndex(router.pathname);
  const [activeIndex, setActiveIndex] = useState<number>(pathIndex);

  useEffect(() => {
    setActiveIndex(pathIndex);
  }, [pathIndex]);

  return [activeIndex, setActiveIndex] as const;
};

export default usePathIndex;
