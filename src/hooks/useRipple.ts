import { useState, useEffect } from 'react';

export const useRipple = (time:number) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), time);
    } else setIsRippling(false);
  }, [coords,time]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return [coords, setCoords, isRippling] as const;
};
