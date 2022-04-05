import React, { useState } from 'react';
import type { VFC } from 'react';
import type { GetTrainingCategoryWithTypeQuery, CreateTrainingMutation } from '~/types/generated/graphql';
import { CREATE_TRAINING } from '~/libs/graphql/mutations';
import { FormContainer, Slider, SelectField, Card } from '~/components';
import { pageTemplate } from '~/styles/share/pageTemplate';
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { css } from '@emotion/react';
import { getNumArr, getTrainingTypesFromCategoryIndex } from '~/utils';

type TrainingType = Omit<GetTrainingCategoryWithTypeQuery['training_types'][number], '__typename'>;

type TrainingFormValues = {
  trainingWeight: number;
  setCount: number;
  count: number;
};

type Props = {
  data?: GetTrainingCategoryWithTypeQuery;
  pageIndex: number;
};

const TrainingPage: VFC<Props> = ({ data, pageIndex }) => {
  const [open, setOpen] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [selectedTrainingType, setSelectedTrainingType] = useState<TrainingType | null>(null);

  const [insertTraining, { error }] = useMutation<CreateTrainingMutation>(CREATE_TRAINING, {
    onCompleted: () => setOpen(true),
  });

  const handleClick = (data: Readonly<TrainingType>) => {
    setSelectedTrainingType(data);
  };

  const registerTraining: SubmitHandler<TrainingFormValues> = (data) => {
    insertTraining({ variables: { user_id: 1, training_type_id: selectedTrainingType?.id, training_weight: data.trainingWeight, training_count: data.count, training_set: data.count, is_finish: true, date: new Date() } });
  };

  if (error) return <p>記録に失敗しました、もう一度実行してください</p>;

  if (selectedTrainingType) {
    //TODO:回数ではない場合、ex.ランニング
    return (
      <FormContainer<TrainingFormValues>
        pageIndex={pageIndex}
        submitFunc={registerTraining}
        title={`✏️ ${selectedTrainingType.name}`}
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        lastElm={
          <p css={pageTemplate.back} onClick={() => setSelectedTrainingType(null)}>
            ＜ カテゴリ選択に戻る
          </p>
        }
      >
        <SelectField formConf={{ name: 'trainingWeight', option: { required: true } }} title={'重量 (kg)'} texts={getNumArr(10, 200, 5)} marginBottom={42} isRequired />
        <SelectField formConf={{ name: 'count', option: { required: true } }} title={'回数'} texts={getNumArr(1, 100, 1)} marginBottom={42} isRequired />
        <SelectField formConf={{ name: 'set', option: { required: true } }} title={'セット数'} texts={getNumArr(1, 30, 1)} marginBottom={42} isRequired />
      </FormContainer>
    );
  } else {
    return (
      <div css={pageTemplate.contentArea}>
        <Slider items={data?.training_categories} setState={setSelectedCategoryIndex} />
        {getTrainingTypesFromCategoryIndex(selectedCategoryIndex, data?.training_types, data?.training_categories)?.map((training_type) => {
          return (
            <Card handleClick={() => handleClick(training_type)} key={training_type.id} customCss={styles.card}>
              {training_type.name}
            </Card>
          );
        })}
      </div>
    );
  }
};

export default TrainingPage;

const styles = {
  card: css`
    margin-bottom: 15px;
  `,
};
