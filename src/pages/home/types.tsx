import type { GetTrainingTrainingTypeQuery } from '~/types/generated/graphql';

export type ScheduleCategories = 'ALL' | '実施' | '予定';
export type TrainingScheduleData = { [key in ScheduleCategories]: TrainingTrainingType | undefined };
export type TrainingTrainingType = GetTrainingTrainingTypeQuery['trainings'] | undefined;
