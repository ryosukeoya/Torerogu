import type { VFC } from 'react';
import { styles } from './style';
import Tab from './Tab';
import { useRecoilState } from 'recoil';
import { headerTabIndexAtom } from '../../store';

const Tabs: VFC = () => {
  const [activeIndex, setActiveIndex] = useRecoilState<number>(headerTabIndexAtom);

  const changeActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ul css={styles.tabs}>
      <Tab onClick={changeActiveIndex} index={0} activeIndex={activeIndex} title={'身体'} isToggle={true} />
      <Tab onClick={changeActiveIndex} index={1} activeIndex={activeIndex} title={'トレーニング'} isToggle={true} />
    </ul>
  );
};

export default Tabs;
