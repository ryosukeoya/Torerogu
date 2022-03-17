import React, { useState } from 'react';
import type { VFC } from 'react';
import type { GetTrainingCategoryWithTypeQuery, CreateTrainingMutation } from '../../types/generated/graphql';
import { CREATE_TRAINING } from '../../libs/graphql/mutations';
import { Slider, Space, Select, Card, FormContainer } from '../../components/entryPoint';
import { pageTemplate } from '../../styles/template';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { css } from '@emotion/react';
import { getNumArr, getTrainingTypes2 } from '../../utils';

type TrainingType = Omit<GetTrainingCategoryWithTypeQuery['training_types'][number], '__typename'>;

type TrainingFormValues = {
  trainingWeight: number;
  setCount: number;
  count: number;
};

type Props = {
  data?: GetTrainingCategoryWithTypeQuery;
};

const TrainingPage: VFC<Props> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [selectedTrainingType, setSelectedTrainingType] = useState<TrainingType | null>(null);

  const method = useForm<TrainingFormValues>();

  const { handleSubmit } = method;

  const [insertTraining, { error }] = useMutation<CreateTrainingMutation>(CREATE_TRAINING, {
    onCompleted: () => setOpen(true),
  });

  const handleClick = (data: Readonly<TrainingType>) => {
    setSelectedTrainingType(data);
  };

  const registerTraining: SubmitHandler<TrainingFormValues> = (data) => {
  console.log("🚀 ~ file: TrainingPage.tsx ~ line 42 ~ data", data)
    insertTraining({ variables: { user_id: 1, training_type_id: selectedTrainingType?.id, training_weight: data.trainingWeight, training_count: data.count, training_set: data.count, is_finish: true, date: new Date() } });
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (error) return <p>記録に失敗しました、もう一度実行してください</p>;

  if (selectedTrainingType) {
    //TODO:回数ではない場合、ex.ランニング
    return (
      <FormProvider {...method}>
        <FormContainer
          handleSubmit={handleSubmit}
          submitFunc={registerTraining}
          title={`✏️ ${selectedTrainingType.name}`}
          open={open}
          handleClose={handleClose}
          OtherElm={
            <p css={pageTemplate.back} onClick={() => setSelectedTrainingType(null)}>
              ＜ カテゴリ選択に戻る
            </p>
          }
        >
          <Select form={{ name: 'trainingWeight', option: { required: true } }} title={'重量'} texts={getNumArr(10, 200, 5)} marginBottom={10} isRequired/>
          <Select form={{ name: 'count', option: { required: true } }} title={'回数'} texts={getNumArr(1, 100, 1)} marginBottom={10} isRequired/>
          <Select form={{ name: 'set', option: { required: true } }} title={'セット数'} texts={getNumArr(1, 30, 1)} marginBottom={10} isRequired/>
        </FormContainer>
      </FormProvider>
    );
  } else {
    return (
      <>
        <Space height={30} />
        <Slider items={data?.training_categories} setState={setSelectedCategoryIndex} />
        {getTrainingTypes2(selectedCategoryIndex, data?.training_types, data?.training_categories)?.map((training_type) => {
          return (
            <Card handleClick={() => handleClick(training_type)} key={training_type.id} customCss={styles.card}>
              {training_type.name}
            </Card>
          );
        })}
      </>
    );
  }
};

export default TrainingPage;

const styles = {
  card: css`
    margin-bottom: 15px;
  `,
};
