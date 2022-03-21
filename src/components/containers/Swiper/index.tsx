import React from 'react';
import type { VFC, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSetRecoilState } from 'recoil';
import { headerTabIndexAtom, swiperAtom } from '~/store';
import type { Swiper as SwiperType } from 'swiper';

type Props = {
  children: ReactNode[];
};

const SwiperContainer: VFC<Props> = ({ children }) => {
  const setActiveIndex = useSetRecoilState<number>(headerTabIndexAtom);
  const setSwiper = useSetRecoilState<SwiperType | undefined>(swiperAtom);

  return (
    <Swiper
      onRealIndexChange={(swiper) => {
        setActiveIndex(swiper.realIndex);
      }}
      onSwiper={(swiper: SwiperType) => {
        const swiperInstance = swiper;
        setSwiper(swiperInstance);
      }}
    >
      {children?.map((child: ReactNode, i: number) => {
        return <SwiperSlide key={i}>{child}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default SwiperContainer;
