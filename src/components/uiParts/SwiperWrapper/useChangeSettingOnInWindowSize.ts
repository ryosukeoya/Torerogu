/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Swiper, { Swiper as SwiperType, EffectFade, SwiperOptions } from 'swiper';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { mainTabIndexAtom, swiperAtom } from '~/store/atoms';
import { useGetWindowSize } from '~/hooks';
import { BREAKPOINT } from '~/styles/const';

export const useChangeSettingOnInWindowSize = (): void => {
  const [swiper, setSwiper] = useRecoilState<SwiperType | undefined>(swiperAtom);
  const setActiveIndex = useSetRecoilState<number>(mainTabIndexAtom);
  const windowSize = useGetWindowSize();

  useEffect(() => {
    const options: SwiperOptions = {
      simulateTouch: false,
      fadeEffect: { crossFade: true },
      nested: true,
      on: {
        realIndexChange: function (swiper) {
          setActiveIndex(swiper.realIndex);
        },
      },
    };

    const realIndex = swiper?.realIndex;
    if (windowSize.width >= BREAKPOINT.MD) {
      options.effect = 'fade';
      options.speed = 230;
      Swiper.use([EffectFade]);
    } else {
      options.effect = 'slide';
      options.speed = 350;
    }
    options.initialSlide = realIndex;
    swiper?.destroy(false, true);
    const newSwiper = new Swiper('.swiper-container', options);
    setSwiper(newSwiper);
  }, [windowSize]); // eslint-disable-next-line react-hooks/exhaustive-deps
};
