import type { VFC, ReactNode, RefObject } from 'react';
import { useChangeSettingOnInWindowSize } from './useChangeSettingOnInWindowSize';

type Props = {
  ref?: RefObject<HTMLDivElement>;
  children: ReactNode[];
};

const SliderWrapper: VFC<Props> = ({ ref, children }) => {
  useChangeSettingOnInWindowSize();

  return (
    <div ref={ref} className='swiper-container' id='swiper'>
      <div className='swiper-wrapper'>
        {children?.map((child: ReactNode, i: number) => {
          return (
            <div key={i} className='swiper-slide'>
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SliderWrapper;
