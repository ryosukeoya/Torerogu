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
};

const Slider: VFC<Props> = ({ items, setState }) => {
  return (
    <Swiper
      centeredSlides={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      onRealIndexChange={(swiper) => {
        setState && setState(swiper.realIndex);
      }}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      css={sliderStyle.sliders(30)}
    >
      {items?.map((item: Pick<ItemType, 'id' | 'name'>) => {
        return <SwiperSlide key={item.id}>{({ isActive }) => <div css={sliderStyle.slider(isActive)}>{item.name}</div>}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Slider;
