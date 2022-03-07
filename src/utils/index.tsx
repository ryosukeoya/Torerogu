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

const getDateInfo = () => {
  const date = new Date();
  const weekdayIndex: number = date.getDay();
  const dateInfo = {
    weekday: WEEK_DAYS[weekdayIndex],
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  return dateInfo;
};

const getCurrentDate = (date:Date): string => {
  const Year = date.getFullYear();
  const Month = date.getMonth() + 1;
  const Day = date.getDate();
  return `${Year}-${Month}-${Day}`;
};

export { getIcon, getDateInfo, getCurrentDate };
