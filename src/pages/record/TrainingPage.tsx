import React, { useState } from 'react';
import type { VFC } from 'react';
import { CreateTrainingDocument, GetTrainingCategoryWithTypeQuery, CreateTrainingMutation } from '~/libs/graphql/generated/graphql';
import { FormContainer, Carousel, SelectField, CardWrapper } from '~/components';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { css } from '@emotion/react';
import { getNumArr, getTrainingTypesFromCategoryIndex } from '~/utils';

type TrainingType = Omit<GetTrainingCategoryWithTypeQuery['training_types'][number], '__typename'>;

type TrainingFormValues = {
  trainingWeight: number;
  set: number;
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

  const [insertTraining, { error }] = useMutation<CreateTrainingMutation>(CreateTrainingDocument, {
    onCompleted: () => setOpen(true),
  });

  const handleClick = (data: Readonly<TrainingType>) => {
    setSelectedTrainingType(data);
  };

  const registerTraining: SubmitHandler<TrainingFormValues> = (data) => {
    insertTraining({
      variables: {
        user_id: 1,
        training_type_id: selectedTrainingType?.id,
        training_weight: data.trainingWeight,
        training_count: data.count,
        training_set: data.set,
        is_finish: true,
        date: new Date(),
      },
    });
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
        <SelectField formConf={{ name: 'trainingWeight', options: { required: true } }} title={'重量 (kg)'} texts={getNumArr(10, 200, 5)} marginBottom={42} isRequired />
        <SelectField formConf={{ name: 'count', options: { required: true } }} title={'回数'} texts={getNumArr(1, 100, 1)} marginBottom={42} isRequired />
        <SelectField formConf={{ name: 'set', options: { required: true } }} title={'セット数'} texts={getNumArr(1, 30, 1)} marginBottom={42} isRequired />
      </FormContainer>
    );
  } else {
    return (
      <div css={pageTemplate.contentArea}>
        <Carousel items={data?.training_categories} setState={setSelectedCategoryIndex} />
        {getTrainingTypesFromCategoryIndex(selectedCategoryIndex, data?.training_types, data?.training_categories)?.map((training_type) => {
          return (
            <CardWrapper handleClick={() => handleClick(training_type)} key={training_type.id} customCardCss={styles.card}>
              {training_type.name}
            </CardWrapper>
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
