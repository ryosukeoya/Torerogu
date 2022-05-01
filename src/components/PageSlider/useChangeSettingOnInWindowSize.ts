import { useEffect, useRef } from 'react';
import Swiper, { EffectFade, SwiperOptions } from 'swiper';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { mainTabIndexAtom, pageIndexAtom, swiperAtom } from '~/store/atoms';
import { useGetWindowSize } from '~/hooks';
import { BREAKPOINT } from '~/styles/const';

export const useChangeSettingOnInWindowSize = (): void => {
  const [swiper, setSwiper] = useRecoilState<Swiper | undefined>(swiperAtom);
  const setActiveIndex = useSetRecoilState<number>(mainTabIndexAtom);
  const index = useRecoilValue<number>(pageIndexAtom);
  const windowSize = useGetWindowSize();

  const mounted = useRef(false);

  useEffect(() => {
    const set = (isMounted: boolean) => {
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
      if (!isMounted) options.initialSlide = index;
      swiper?.destroy(false, true);
      const newSwiper = new Swiper('.swiper-container', options);
      setSwiper(newSwiper);
    };

    if (mounted.current) {
      set(mounted.current);
    } else {
      set(mounted.current);
      mounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize]);
};
