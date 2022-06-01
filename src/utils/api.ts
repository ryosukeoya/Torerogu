//API関連の共通したい関数とかを配置
import type { GetTrainingCategoryWithTypeQuery } from '~/libs/graphql/generated/graphql';
import { getStringTypeDate } from './date';

type TrainingCategory = GetTrainingCategoryWithTypeQuery['training_categories'] | undefined;
type TrainingTypes = GetTrainingCategoryWithTypeQuery['training_types'] | undefined;
type TrainingType = Omit<GetTrainingCategoryWithTypeQuery['training_types'][number], '__typename'>;

export const getTrainingTypesFromCategoryID = (selectedCategoryID: number, training_types: TrainingTypes): Readonly<TrainingType>[] | undefined => {
  const slectedTrainingTypes = training_types?.filter(function (training_type) {
    return training_type.training_category_id === selectedCategoryID;
  });
  return slectedTrainingTypes;
};

export const getTrainingTypesFromCategoryIndex = (selectedCategoryIndex: number, training_types: TrainingTypes, training_categories: TrainingCategory): Readonly<TrainingType>[] | undefined => {
  const slectedTrainingTypes = training_types?.filter(function (training_type) {
    return training_type.training_category_id === training_categories?.[selectedCategoryIndex].id;
  });
  return slectedTrainingTypes;
};

// 指定した日付のデータを取得する
export const getDataSpecifiedDate = <T extends { date: string }[] & { [key: string]: unknown }[]>(data: T, date: Date) => {
  return data?.filter((d) => getStringTypeDate(new Date(d.date), 'YYYY-MM-DD') === getStringTypeDate(date, 'YYYY-MM-DD')) as T;
};

export const getExtractedDataLaterThanTheSpecifiedDate = <T extends ({ date: string; is_finish: boolean }[] & { [key: string]: unknown }[]) | undefined>(data: T, date: Date) => {
  return data?.filter((d) => (new Date(d.date) >= date && d.is_finish === false) || d.is_finish === true) as T;
};
