import { useState, useEffect, useRef } from 'react';
import { useGetWindowSize } from '~/hooks';

export const useGetElementWidth = <T extends HTMLElement>(deps?: unknown) => {
  const [width, setWidth] = useState<number | undefined>();
  const ref = useRef<T>(null);
  const windowSize = useGetWindowSize();

  useEffect(() => {
    setWidth(ref.current?.offsetWidth);
  }, [windowSize, deps]);

  return [ref, width] as const;
};