import React, { useState } from 'react';
import type { VFC } from 'react';
import type { GetRecordPagePropsQuery, CreateTrainingMutation } from '../../types/generated/graphql';
import { CREATE_TRAINING } from '../../libs/graphql/mutations/record';
import { Slider, Space, Card, Input } from '../../components/_indexs';
import { cardStyle, sliderStyle, simpleButton, inputStyle } from '../../components/_styles';
import { templates } from '../../styles/template';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

type TrainingType = {
  id: number;
  name: string;
  training_category_id: number;
};

type TrainingFormValues = {
  trainingWeight: number;
  setCount: number;
  count: number;
};

type Props = {
  data?: GetRecordPagePropsQuery;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const SecondPage: VFC<Props> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedCategoryID, setSelectedCategoryID] = useState<number>(1);
  const [selectedTrainingType, setSelectedTrainingType] = useState<TrainingType | null>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TrainingFormValues>();

  const [insertTraining, { error }] = useMutation<CreateTrainingMutation>(CREATE_TRAINING, {
    onCompleted: () => setOpen(true),
  });

  const handleClick = (data: TrainingType) => {
    setSelectedTrainingType(data);
  };

  const getTrainingTypes = (): TrainingType[] | undefined => {
    const slectedTrainingTypes = data?.training_types.filter(function (training_type) {
      return training_type.training_category_id === selectedCategoryID;
    });
    return slectedTrainingTypes;
  };

  const registerTraining: SubmitHandler<TrainingFormValues> = (data) => {
    insertTraining({ variables: { user_id: 1, training_type_id: selectedTrainingType?.id, training_weight: data.trainingWeight, training_count: data.count, training_set: data.setCount, is_finish: true, date: new Date() } });
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (error) return <p>記録に失敗しました、もう一度実行してください</p>;

  if (selectedTrainingType) {
    //TODO:回数ではない場合、ex.ランニング
    return (
      <>
        <form onSubmit={handleSubmit(registerTraining)}>
          <div css={templates.contentArea}>
            <h2 css={templates.title}>✏️ {selectedTrainingType.name}</h2>
            <div css={templates.content}>
              <p css={templates.contentTitle}>
                重量<span css={templates.require}>*必須</span>
              </p>
              <input {...register('trainingWeight', { required: true, pattern: /[0-9]/ })} type='text' css={inputStyle} />
              <span css={templates.unit}>kg</span>
              <p css={templates.errorMessage}>
                {errors.trainingWeight?.type === 'required' && '必須項目です'}
                {errors.trainingWeight?.type === 'pattern' && '数値を入力してください'}
              </p>
            </div>
            <div css={templates.content}>
              <p css={templates.contentTitle}>
                セット数<span css={templates.require}>*必須</span>
              </p>
              <input {...register('setCount', { required: true, pattern: /[0-9]/ })} type='text' css={inputStyle} />
              <span css={templates.unit}>set</span>
              <p css={templates.errorMessage}>
                {errors.setCount?.type === 'required' && '必須項目です'}
                {errors.setCount?.type === 'pattern' && '数値を入力してください'}
              </p>
            </div>
            <div css={templates.content}>
              <p css={templates.contentTitle}>
                回数<span css={templates.require}>*必須</span>
              </p>
              <input {...register('count', { required: true, pattern: /[0-9]/ })} type='text' css={inputStyle} />
              <span css={templates.unit}>回</span>
              <p css={templates.errorMessage}>
                {errors.count?.type === 'required' && '必須項目です'}
                {errors.count?.type === 'pattern' && '数値を入力してください'}
              </p>
            </div>
            <Input type={'isInput'} typeAttr='submit' _css={simpleButton(10)} value={'記録する'} />
            <p css={templates.back} onClick={() => setSelectedTrainingType(null)}>
              ＜ カテゴリ選択に戻る
            </p>
          </div>
          <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
              記録しました！
            </Alert>
          </Snackbar>
        </form>
      </>
    );
  } else {
    return (
      <>
        <Space height={20} />
        <Slider items={data?.training_categories} setState={setSelectedCategoryID} sliderStyle={sliderStyle} />
        {getTrainingTypes()?.map((training_type) => {
          return (
            <Card data={training_type} id={training_type.id} handleClick={handleClick} key={training_type.id} _css={cardStyle(15)}>
              {training_type.name}
            </Card>
          );
        })}
      </>
    );
  }
};

export default SecondPage;
