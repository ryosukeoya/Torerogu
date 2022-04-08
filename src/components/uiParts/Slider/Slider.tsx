import type { VFC, Dispatch, SetStateAction } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { css } from '@emotion/react';
import { COLOR, FONT } from '~/styles/const';
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
      speed={200}
      threshold={0}
      touchAngle={45}
      spaceBetween={20}
      touchRatio={0.7}
      slidesPerView={3.6}
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

const sliderStyle = {
  sliders: (marginBottom?: number) => css`
    margin-bottom: ${marginBottom}px;
  `,
  slider: (isActive: boolean) => css`
    font-size: ${FONT.LARGE};
    text-align: center;
    background-color: ${COLOR.ORANGE};
    padding: 40px 0;
    margin-top: 10px;
    ${isActive ? `color:${COLOR.RED}` : 'color:white'};
    border-radius: 20px;
    cursor: pointer;
  `,
};
