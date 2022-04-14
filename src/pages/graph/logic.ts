interface PreChartData extends Record<string, unknown> {
  date: string;
  weight: number;
}

type ChartData = {
  date: number;
  weight: number;
};

// 日付でSortしたものを返す
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

// 指定した期間でデータを抽出する
export const getDataExtractionInSpecifiedPeriod = <T extends { date: string }[] & { [key: string]: unknown }[]>(data: T, specifyDatePeriod: 'all' | 7 | 30 | 365): T => {
  if (specifyDatePeriod === 'all') return data;
  const currentDate = new Date();
  const date = new Date();
  date.setDate(date.getDate() - specifyDatePeriod);
  const extractedData = data?.filter((d) => {
    const di = new Date(d.date);
    return date <= di && di <= currentDate;
  });
  return extractedData as T;
};

export const getSpecifyDatePeriodFromActiveIndex = (activeIndex: number): 'all' | 7 | 30 | 365 => {
  switch (activeIndex) {
    // one week
    case 0:
      return 7;
    // one month
    case 1:
      return 30;
    // one year
    case 2:
      return 365;
    case 3:
      return 'all';
    default:
      throw new Error('wrong activeIndex given');
  }
};
