import type { VFC, ReactNode } from 'react';
import { useChangeSettingOnInWindowSize } from './useChangeSettingOnInWindowSize';

// all Swiper styles including all modules styles (like Navigation, Pagination, etc.)
// import 'swiper/css';

type Props = {
  children: ReactNode[];
};

const SwiperContainer: VFC<Props> = ({ children }) => {
  useChangeSettingOnInWindowSize();

  return (
    <div className='swiper-container' id='swiper'>
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

export default SwiperContainer;
