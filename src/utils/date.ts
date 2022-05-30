import { WEEK_DAYS } from '../constants';

// Date型を項目毎にプロパティとして分けたオブジェクトに変換して返す
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

// Date型からString型に変換しフォーマットしたものを返す
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


export const getDateBeforeOneDay = (date: Date): Date => {
  date.setDate(date.getDate() - 1);
  return date;
};

export const getNextDayDate = (date:Date):Date => {
  date.setDate(date.getDate() + 1);
  return date;
}

// 指定した日数分を変更した日付を取得する
export const getDateChangedSpecifiedDaysPart = (date: Date, specifiedDays: number): Date => {
  date.setDate(date.getDate() + specifiedDays);
  return date;
};

// ex: 先頭のYYYY-MM-DD
export const getDateInRegexp = (date: string): string | undefined => {
  const patterns = /^\d{4}-\d{2}-\d{2}/g;
  const result = date.match(patterns);
  return result?.[0];
};