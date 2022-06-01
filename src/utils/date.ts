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
export const getStringTypeDate = (date: Date, outputFormat?: 'YYYY-MM-DD' | 'YYYY-MM-DD hh:mm:ss' | 'normal'): string => {
  const YYYY = date.getFullYear();
  const MM = ('00' + (date.getMonth() + 1)).slice(-2);
  const DD = ('00' + date.getDate()).slice(-2);
  const hh = ('00' + date.getHours()).slice(-2);
  const mm = ('00' + date.getMinutes()).slice(-2);
  const ss = ('00' + date.getSeconds()).slice(-2);
  switch (outputFormat) {
    case 'YYYY-MM-DD':
      return `${YYYY}-${MM}-${DD}`;
    case 'YYYY-MM-DD hh:mm:ss':
      return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
    default:
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${YYYY}-${month}-${day}`;
  }
};

// 指定した日数分を変更した日付を取得する
export const getDateChangedSpecifiedDaysPart = (date: Date, specifiedDays: number): Date => {
  date.setDate(date.getDate() + specifiedDays);
  return date;
};

// 指定のDateオブジェクトから1日戻したものを返す
export const getDateBeforeOneDay = (date: Date): Date => {
  date.setDate(date.getDate() - 1);
  return date;
};

// 指定のDateオブジェクトから1日先に進めたものを返す
export const getNextDayDate = (date: Date): Date => {
  date.setDate(date.getDate() + 1);
  return date;
};

// ex: 先頭のYYYY-MM-DD
export const getDateInRegexp = (date: string): string | undefined => {
  const patterns = /^\d{4}-\d{2}-\d{2}/g;
  const result = date.match(patterns);
  return result?.[0];
};

// Dateオブジェクトに指定の時間を足したものを返す
export const addHour = (date: Date, hours: number): Date => {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  return date;
};

// Dateオブジェクトに指定の時間を引いたものを返す
export const subHour = (date: Date, hours: number): Date => {
  date.setTime(date.getTime() - hours * 60 * 60 * 1000);
  return date;
};

// Dateオブジェクトに指定の分を引いたものを返す
export const subMinutes = (date: Date, minutes: number): Date => {
  date.setMinutes(date.getMinutes() - minutes);
  return date;
};

// DateオブジェクトのHH:MM:DDを00:00:00として変換したものを返す
export const getDateClearedTime = (date: Date): Date => {
  const dateStr: string = date.toDateString();
  return new Date(dateStr);
};
