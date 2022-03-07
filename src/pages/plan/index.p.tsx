import type { NextPage } from 'next';
import React, { VFC } from 'react';
import { Input, Button, Select } from '../../components/_indexs';
import { inputStyle, simpleButton, selectStyle } from '../../components/_styles';
import { headerTabIndexAtom } from '../../store';
import { useRecoilValue } from 'recoil';
import { WEEK_DAYS } from '../../constants';
import { templates } from '../../styles/template';

const titles = ['曜日', 'カテゴリ', '種目', 'セット数', '回数'];

const Plan: NextPage<VFC> = () => {
  const activeIndex = useRecoilValue(headerTabIndexAtom);

  if (activeIndex === 0) {
    return (
      <>
        <div css={templates.contentArea}>
          <h2 css={templates.title}>✏️ 目標体重を設定する</h2>
          <div css={templates.content}>
            <p>日付</p>
            <Input type={'isInput'} typeAttr='date' _css={inputStyle} />
          </div>
          <div css={templates.content}>
            <p>体重</p>
            <Input type={'isInput'} typeAttr='text' placeholder='60' _css={inputStyle} />
            kg
          </div>
        </div>

        <Button type={'isButton'} text={'記録する'} _css={simpleButton(10)} />
      </>
    );
  } else if (activeIndex === 1) {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'column' }} css={templates.contentArea}>
          <h2 css={templates.title}>✏️ 週ごとの設定</h2>
          <Input type={'isInput'} typeAttr='date' _css={inputStyle} />
          {titles.map((title, i) => {
            return <Select key={i} title={title} texts={WEEK_DAYS} _css={selectStyle} />;
          })}
        </div>

        <Button type={'isButton'} text={'記録する'} _css={simpleButton(10)} />
      </div>
    );
  } else {
    return null;
  }
};

export default Plan;
