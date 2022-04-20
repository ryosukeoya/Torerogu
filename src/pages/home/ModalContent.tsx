import type { VFC } from 'react';
import { getDataSpecifiedDate, getDateInfo } from '~/utils';
import type { TrainingTrainingType } from './types';
import type { GetTrainingTrainingTypeQuery } from '~/types/generated/graphql';
import { css } from '@emotion/react';
import { FONT, COLOR } from '~/styles/const';
import type { ScheduleCategories } from './types';

type Trainings = Omit<GetTrainingTrainingTypeQuery, '__typename'>['trainings'];

type Props = {
  selectedDate: Date | undefined;
  training: TrainingTrainingType | undefined;
  category: ScheduleCategories;
};

// TODO: トレーニング数が多い時
const ModalContent: VFC<Props> = ({ selectedDate, training, category }) => {
  const date = selectedDate && getDateInfo(selectedDate);
  return (
    <>
      <h1 css={styles.title}>✏️ {`${date?.year}年${date?.month}月${date?.day}日${category !== 'ALL' ? category : ''}`}のトレーニング</h1>
      <ul>
        {selectedDate && training && getDataSpecifiedDate<Trainings>(training, selectedDate).length === 0 ? (
          <p>※ 本日のトレーニングはありません</p>
        ) : (
          selectedDate &&
          training &&
          getDataSpecifiedDate<Trainings>(training, selectedDate)?.map((d) => {
            return (
              <>
                <li key={d.id} css={styles.item}>
                  <p css={styles.trainingName}>{d.training_type.name}</p>
                  <p>
                    ・{d.training_weight}kg × {d.training_count}回、{d.training_set}セット
                  </p>
                  <button css={styles.deleteButton}>削除</button>
                </li>
              </>
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
