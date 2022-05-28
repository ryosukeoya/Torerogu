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
  specifyDatePeriod !== 'all' && date.setDate(date.getDate() - (specifyDatePeriod - 1));
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

interface PreChartData extends Record<string, unknown> {
  date: string;
  weight: number;
}

type ChartData = {
  date: number;
  weight: number;
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
