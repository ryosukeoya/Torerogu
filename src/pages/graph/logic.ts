import type { GetTrainingWithBodyInfoQuery } from '~/types/generated/graphql';

type BodyInfo = Pick<GetTrainingWithBodyInfoQuery['body_info_data_histories'][number], '__typename' | 'id' | 'user_id'>;

//TODO:FIX
type FixType = {
  weight: number;
  date: Date;
};

type BodyInfoDataHistory = FixType & BodyInfo;

type ChartData = {
  date: number;
  weight: number;
};
export const getSortDate = (data: BodyInfoDataHistory[] | undefined): { date: number; weight: number }[] | undefined => {
  const result = data?.map((d: BodyInfoDataHistory) => {
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
