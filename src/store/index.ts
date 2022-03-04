import { atom } from 'recoil';
// import { recoilPersist } from 'recoil-persist';

// const { persistAtom } = recoilPersist();

export const headerTabIndexAtom = atom({
  key: 'activeIndex',
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});
