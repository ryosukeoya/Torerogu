import { useState, useEffect, useRef } from 'react';
import { useGetWindowSize } from '~/hooks';

const useGetElementWidth = <T extends HTMLElement>(data?: Record<string, unknown>) => {
  const [width, setWidth] = useState<number | undefined>();
  const elm = useRef<T>(null);
  const windowSize = useGetWindowSize();
  useEffect(() => {
    setWidth(elm.current?.offsetWidth);
  }, [windowSize, data]);

  return [elm, width] as const;
};

export default useGetElementWidth;