import { atom } from 'recoil';
import type { Swiper as SwiperType } from 'swiper';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const mainTabIndexAtom = atom({
  key: 'mainTabIndexKey',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const pageIndexAtom = atom<number>({
  key: 'pageIndexKey',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const swiperAtom = atom<SwiperType | undefined>({
  key: 'swiperKey',
  default: undefined,
  dangerouslyAllowMutability: true,
});
