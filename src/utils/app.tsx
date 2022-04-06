import React from 'react';
import Image from 'next/image';
import { PAGE_TITLE, PAGE_PATH, WEEK_DAYS } from '../constants/index';

const CONST = {
  ICON: {
    HEIGHT: '28px',
    WIDTH: '28px',
  },
};

const getIcon = (title: string, isActive?: boolean): JSX.Element | undefined => {
  const TITLE: string[] = Object.keys(PAGE_PATH);

  switch (title) {
    case TITLE[0]:
      return isActive ? <Image src='/imgs/home_red.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={PAGE_TITLE[0]} /> : <Image src='/imgs/home.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={PAGE_TITLE[0]} />;
    case TITLE[1]:
      return isActive ? <Image src='/imgs/plan_red.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={PAGE_TITLE[1]} /> : <Image src='/imgs/plan.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={PAGE_TITLE[1]} />;
    case TITLE[2]:
      return isActive ? <Image src='/imgs/record_red.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={PAGE_TITLE[2]} /> : <Image src='/imgs/record.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={PAGE_TITLE[2]} />;
    case TITLE[3]:
      return isActive ? <Image src='/imgs/graph_red.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={PAGE_TITLE[3]} /> : <Image src='/imgs/graph.png' width={CONST.ICON.WIDTH} height={CONST.ICON.HEIGHT} alt={PAGE_TITLE[3]} />;
    default:
      return;
  }
};

const getDateInfo = (date: Date) => {
  const weekdayIndex: number = date.getDay();
  const dateInfo = {
    weekday: WEEK_DAYS[weekdayIndex],
    month: date.getMonth() + 1,
    day: date.getDate(),
    mm: ('00' + (date.getMonth() + 1)).slice(-2),
    dd: ('00' + date.getDate()).slice(-2),
  };
  return dateInfo;
};

const getCurrentDate = (date: Date, isMMDD: boolean): string => {
  const year = date.getFullYear();
  if (isMMDD) {
    const mm = ('00' + (date.getMonth() + 1)).slice(-2);
    const dd = ('00' + date.getDate()).slice(-2);
    return `${year}-${mm}-${dd}`;
  } else {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }
};

// 初期値と最大値と差分からnumber型の配列を作成し返す
const getNumArr = (init: number, max: number, diff: number): number[] => {
  const numArr: number[] = [];
  for (let i = init; i <= max; i = i + diff) {
    numArr.push(i);
  }
  return numArr;
};

export { getIcon, getDateInfo, getCurrentDate, getNumArr };
