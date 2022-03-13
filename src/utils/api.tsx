//API関連の共通したい関数とかを配置
import type { GetTrainingCategoryWithTypeQuery } from '../types/generated/graphql';

type TrainingTypes = GetTrainingCategoryWithTypeQuery['training_types'];
type TrainingType = Omit<GetTrainingCategoryWithTypeQuery['training_types'][number], '__typename'>;

export const getTrainingTypes = (training_types?: TrainingTypes, selectedCategoryID?: number): Readonly<TrainingType>[] | undefined => {
  const slectedTrainingTypes = training_types?.filter(function (training_type) {
    return training_type.training_category_id === selectedCategoryID;
  });
  return slectedTrainingTypes;
};
