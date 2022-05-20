import { useState, useEffect, useRef } from 'react';
import { useGetWindowSize } from '~/hooks';

const useGetElementWidth = <T extends HTMLElement>(deps?: unknown) => {
  const [width, setWidth] = useState<number | undefined>();
  const ref = useRef<T>(null);
  const windowSize = useGetWindowSize();

  useEffect(() => {
    setWidth(ref.current?.offsetWidth);
  }, [windowSize, deps]);

  return [ref, width] as const;
};

export default useGetElementWidth;
