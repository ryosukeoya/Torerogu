import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getPagePathIndex } from '../utils/app';

const useActiveIndexFromPath = () => {
  const router = useRouter();
  const pathIndex = getPagePathIndex(router.pathname);
  const [activeIndex, setActiveIndex] = useState<number>(pathIndex);

  useEffect(() => {
    setActiveIndex(pathIndex);
  }, [pathIndex]);

  return [activeIndex, setActiveIndex] as const;
};

export default useActiveIndexFromPath;
