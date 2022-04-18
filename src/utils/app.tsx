import React from 'react';
import Image from 'next/image';
import { PAGE_TITLE, PAGE_PATH, WEEK_DAYS } from '../constants';
import type { PageTitle } from '~/types';

// TODO: FATすぎるファイル分けた方がいい

// 指定した日付のデータを取得する
export const getDataSpecifiedDate = <T extends { date: string }[] & { [key: string]: unknown }[]>(data: T, date: Date) => {
  return data?.filter((d) => d.date === getStringTypeDate(date, 'YYYY-MM-DD')) as T;
};

interface PreChartData extends Record<string, unknown> {
  date: string;
  weight: number;
}

type ChartData = {
  date: number;
  weight: number;
};

const GRAPH_PERIOD = {
  WEEK: 7,
  MONTH: 30,
  YEAR: 365,
  ALL: 'all',
} as const;

type GraphPeriodValue = typeof GRAPH_PERIOD[keyof typeof GRAPH_PERIOD];

// 指定した期間でデータを抽出したものを返す
export const getDataExtractionInSpecifiedPeriod = <T extends { date: string; is_record: boolean }[] & { [key: string]: unknown }[]>(data: T, specifyDatePeriod: GraphPeriodValue): T => {
  const currentDate = new Date();
  const date = new Date();
  specifyDatePeriod !== 'all' && date.setDate(date.getDate() - specifyDatePeriod);
  const extractedData = data?.filter((d) => {
    if (specifyDatePeriod === 'all') {
      return d.is_record === true;
    } else {
      const di = new Date(d.date);
      return date <= di && di <= currentDate && d.is_record === true;
    }
  });
  return extractedData as T;
};

// 日付でソートしたものを返す
export const getSortedDataFromDate = (data: PreChartData[]): ChartData[] => {
  const result = data?.map((d) => {
    return {
      date: new Date(d.date).getTime(),
      weight: d.weight,
    };
  });

  result?.sort(function (a: ChartData, b: ChartData) {
    if (a.date === b.date) {
      return 0;
    } else if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return result;
};

// activeIndexからグラフに表示する日数を取得する
export const getGraphPeriodFromActiveIndex = (activeIndex: number): GraphPeriodValue => {
  switch (activeIndex) {
    case 0:
      return GRAPH_PERIOD['WEEK'];
    case 1:
      return GRAPH_PERIOD['MONTH'];
    case 2:
      return GRAPH_PERIOD['YEAR'];
    case 3:
      return GRAPH_PERIOD['ALL'];
    default:
      throw new Error('wrong activeIndex given');
  }
};

const CONST = {
  ICON: {
    HEIGHT: '28px',
    WIDTH: '28px',
  },
};

export const getIcon = (title: PageTitle, isActive?: boolean): JSX.Element | undefined => {
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

// Dateを項目毎にプロパティとして分けたオブジェクトに変換して返す
export const getDateInfo = (date: Date) => {
  const weekdayIndex: number = date.getDay();
  const dateInfo = {
    year: date.getFullYear(),
    weekday: WEEK_DAYS[weekdayIndex],
    month: date.getMonth() + 1,
    day: date.getDate(),
    mm: ('00' + (date.getMonth() + 1)).slice(-2),
    dd: ('00' + date.getDate()).slice(-2),
  };
  return dateInfo;
};

// Date型からString型に変換したものを返す
export const getStringTypeDate = (date: Date, outputFormat?: 'YYYY-MM-DD' | 'normal'): string => {
  const year = date.getFullYear();
  if (outputFormat === 'YYYY-MM-DD') {
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
export const getNumArr = (init: number, max: number, diff: number): number[] => {
  const numArr: number[] = [];
  for (let i = init; i <= max; i = i + diff) {
    numArr.push(i);
  }
  return numArr;
};
