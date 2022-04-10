import { atom } from 'recoil';
import type { Swiper } from 'swiper';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const mainTabIndexAtom = atom({
  key: 'activeIndexKey',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const swiperAtom = atom<Swiper | undefined>({
  key: 'swiperKey',
  default: undefined,
  dangerouslyAllowMutability: true,
});
