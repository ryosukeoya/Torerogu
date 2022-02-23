import React from 'react';
import Image from 'next/image';
import { CONST } from '../components/BottomNav/style';

export const getIcon = (title: string, isActive?: boolean): JSX.Element | undefined => {
  switch (title) {
    case 'ホーム':
      return isActive ? <Image src='/imgs/home_red.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={CONST.ICON_ALT.HOME} /> : <Image src='/imgs/home.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={CONST.ICON_ALT.HOME} />;
    case '計画':
      return isActive ? <Image src='/imgs/plan_red.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={CONST.ICON_ALT.PLAN} /> : <Image src='/imgs/plan.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={CONST.ICON_ALT.PLAN} />;
    case '記録':
      return isActive ? <Image src='/imgs/record_red.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={CONST.ICON_ALT.RECORD} /> : <Image src='/imgs/record.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={CONST.ICON_ALT.RECORD} />;
    case 'グラフ':
      return isActive ? <Image src='/imgs/graph_red.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={CONST.ICON_ALT.GRAPH} /> : <Image src='/imgs/graph.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={CONST.ICON_ALT.GRAPH} />;
    default:
      return;
  }
};

export const getDate = () => {
  const date = new Date();
  const dateObj = {
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  return dateObj;
};
