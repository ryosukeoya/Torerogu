import type { VFC, Dispatch, SetStateAction } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { sliderStyle } from './style';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type ItemType = {
  __typename?: string | undefined;
  id: number;
  name: string;
};

type Props = {
  items?: ItemType[];
  setState?: Dispatch<SetStateAction<number>>;
  sliderStyle: typeof sliderStyle;
};

const Slider: VFC<Props> = ({ items, setState, sliderStyle }) => {
  return (
    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={50} slidesPerView={3} navigation pagination={{ clickable: true }} css={sliderStyle.sliders(30)}>
      {items?.map((item: Pick<ItemType, 'id' | 'name'>) => {
        return (
          <SwiperSlide onClick={() => setState && setState(item.id)} key={item.id}>
            <div css={sliderStyle.slider}>{item.name}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
