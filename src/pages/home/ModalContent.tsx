import type { VFC, SetStateAction, Dispatch } from 'react';
import { getDataSpecifiedDate, getDateInfo } from '~/utils';
import type { TrainingTrainingType } from './types';
import type { GetTrainingTrainingTypeQuery } from '~/types/generated/graphql';
import { css } from '@emotion/react';
import { FONT, COLOR } from '~/styles/const';
import type { ScheduleCategories } from './types';
import { DELETE_TRAINING } from '~/libs/graphql/mutations';
import type { DeleteTrainingMutation } from '~/types/generated/graphql';
import { useMutation } from '@apollo/client';

type Trainings = Omit<GetTrainingTrainingTypeQuery, '__typename'>['trainings'];

type Props = {
  selectedDate: Date | undefined;
  extractedTrainings: TrainingTrainingType;
  trainings: TrainingTrainingType;
  setTrainings: Dispatch<SetStateAction<TrainingTrainingType>>;
  category: ScheduleCategories;
};

// TODO: トレーニング数が多い時
const ModalContent: VFC<Props> = ({ selectedDate, extractedTrainings, trainings, setTrainings, category }) => {
  const date = selectedDate && getDateInfo(selectedDate);
  const [deleteTraining, { error }] = useMutation<DeleteTrainingMutation>(DELETE_TRAINING, {
    // onCompleted: () => console.log('deleted'),
  });

  const handleClick = (trainings: TrainingTrainingType, pk: number) => {
    deleteTraining({ variables: { id: pk } });

    const filteredTraining = trainings?.filter((training) => training.id !== pk);
    setTrainings(filteredTraining);
  };

  return (
    <>
      <h1 css={styles.title}>✏️ {`${date?.year}年${date?.month}月${date?.day}日${category !== 'ALL' ? category : ''}`}のトレーニング</h1>
      <ul>
        {selectedDate && extractedTrainings && getDataSpecifiedDate<Trainings>(extractedTrainings, selectedDate).length === 0 ? (
          <p>※ 本日のトレーニングはありません</p>
        ) : (
          selectedDate &&
          extractedTrainings &&
          getDataSpecifiedDate<Trainings>(extractedTrainings, selectedDate)?.map((extractedTraining) => {
            return (
                <li key={extractedTraining.id} css={styles.item}>
                  <p css={styles.trainingName}>{extractedTraining.training_type.name}</p>
                  <p>
                    ・{extractedTraining.training_weight}kg × {extractedTraining.training_count}回、{extractedTraining.training_set}セット
                  </p>
                  <button onClick={() => handleClick(trainings, extractedTraining.id)} css={styles.deleteButton}>
                    削除
                  </button>
                </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default ModalContent;

const styles = {
  item: css`
    position: relative;
    padding-bottom: 20px;
  `,
  title: css`
    font-size: ${FONT.X1_LARGE};
    padding-bottom: 20px;
  `,
  trainingName: css`
    font-size: ${FONT.LARGE};
    padding-bottom: 8px;
  `,
  // TODO: 縦に中央揃え
  deleteButton: css`
    position: absolute;
    top: 0;
    right: 0;
    padding: 7px 12px;
    border-radius: 10px;
    background-color: ${COLOR.RED}B3;
    border: none;
    color: white;
    font-size: ${FONT.SMALL};
    cursor: pointer;
  `,
};
