import type { VFC } from 'react';
import { styles } from './style';
import Tab from './HeaderTab';
import { useRecoilState } from 'recoil';
import { headerTabIndexAtom } from '../../store';
import { useGetTitle } from '../../hooks/useGetTitle';

const HeaderTabs: VFC = () => {
  const [activeIndex, setActiveIndex] = useRecoilState<number>(headerTabIndexAtom);

  const changeActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  const titles = useGetTitle();

  return (
    <ul css={styles.tabs}>
      {titles?.map((title: string, index: number) => {
        return <Tab key={index} onClick={changeActiveIndex} index={index} activeIndex={activeIndex} title={title} isToggle={true} />;
      })}
    </ul>
  );
};

export default HeaderTabs;
