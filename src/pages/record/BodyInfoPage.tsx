import React, { useState } from 'react';
import type { VFC } from 'react';
import { FormContainer, InputField } from '~/components';
import { getDateInfo, getStringTypeDate } from '~/utils/app';
import { useMutation } from '@apollo/client';
import { CreateBodyInfoHistoriesDocument, CreateBodyInfoHistoriesMutation } from '~/libs/graphql/generated/graphql';
import { SubmitHandler } from 'react-hook-form';
import { CreateBodyInfoHistoriesMutationVariables } from '~/libs/graphql/generated/graphql';

type BodyInfoFormValues = {
  weight: string | '';
  bodyFatPercentage: string | '' | null;
};

type Props = {
  pageIndex: number;
};

const BodyInfoPage: VFC<Props> = ({ pageIndex }) => {
  const [open, setOpen] = useState(false);
  const [insertBodyInfo, {}] = useMutation<CreateBodyInfoHistoriesMutation>(CreateBodyInfoHistoriesDocument, {
    onCompleted: () => setOpen(true),
  });

  const date = getDateInfo(new Date());

  const registerBodyInfo: SubmitHandler<BodyInfoFormValues> = (data) => {
    // TODO:FIX
    const user_id = 1;

    insertBodyInfo({
      variables: {
        height: null,
        weight: Number(data.weight),
        body_fat_percentage: data.bodyFatPercentage !== '' ? Number(data.bodyFatPercentage) : null,
        date: getStringTypeDate(new Date()),
        user_id: user_id,
        is_record: true,
      } as CreateBodyInfoHistoriesMutationVariables,
    });
  };

  return (
    <FormContainer<BodyInfoFormValues>
      pageIndex={pageIndex}
      submitFunc={registerBodyInfo}
      title={` ✏️ ${date.month} / ${date.day} (${date.weekday}) の記録`}
      open={open}
      handleClose={() => {
        setOpen(false);
      }}
    >
      <InputField data-testid='weight' title='体重' type='text' unit='kg' placeholder='60' formConf={{ name: 'weight', options: { required: true, maxLength: 3, pattern: /[0-9]/ } }} />
      <InputField data-testid='bodyFatPercentage' title='体脂肪率' type='text' unit='%' placeholder='10' formConf={{ name: 'bodyFatPercentage', options: { maxLength: 2, pattern: /[0-9]/ } }} />
    </FormContainer>
  );
};

export default BodyInfoPage;
