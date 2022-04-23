import type { VFC, ReactNode, RefObject } from 'react';
import { useChangeSettingOnInWindowSize } from './useChangeSettingOnInWindowSize';

type Props = {
  elm?: RefObject<HTMLDivElement>;
  children: ReactNode[];
};

const PageSliderWrapper: VFC<Props> = ({ elm, children }) => {
  useChangeSettingOnInWindowSize();

  return (
    <div ref={elm} className='swiper-container' id='swiper'>
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

export default PageSliderWrapper;
