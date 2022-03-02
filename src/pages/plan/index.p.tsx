import type { NextPage } from 'next';
import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { Input, Button, Select } from '../../components/_indexs';
import { inputStyle, buttonStyle, selectStyle } from '../../components/_styles';
import { FONT } from '../../styles/const';
import { headerTabIndexAtom } from '../../store';
import { useRecoilValue } from 'recoil';
import { WEEK_DAYS } from '../../constants';

const titles = ['曜日', 'カテゴリ', '種目', 'セット数', '回数'];

const Plan: NextPage<VFC> = () => {
  const activeIndex = useRecoilValue(headerTabIndexAtom);

  if (activeIndex === 0) {
    return (
      <>
        <div css={styles.contentArea}>
          <h2 css={styles.title}>✏️ 目標体重を設定する</h2>
          <div css={styles.content}>
            <p>日付</p>
            <Input type={'isInput'} typeAttr='date' _css={inputStyle} />
          </div>
          <div css={styles.content}>
            <p>体重</p>
            <Input type={'isInput'} typeAttr='text' placeholder='60' _css={inputStyle} />
            kg
          </div>
        </div>

        <Button type={'isButton'} text={'記録する'} _css={buttonStyle(10)} />
      </>
    );
  } else if (activeIndex === 1) {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'column' }} css={styles.contentArea}>
          <h2 css={styles.title}>✏️ 週ごとの設定</h2>
          <Input type={'isInput'} typeAttr='date' _css={inputStyle} />
          {titles.map((title, i) => {
            return <Select key={i} title={title} texts={WEEK_DAYS} _css={selectStyle} />;
          })}
        </div>

        <Button type={'isButton'} text={'記録する'} _css={buttonStyle(10)} />
      </div>
    );
  } else {
    return null;
  }
};

export default Plan;

const styles = {
  contentArea: css`
    width: 90vw;
    margin: 0 auto;
    padding-top: 30px;
  `,
  title: css`
    padding-bottom: 20px;
    font-size: ${FONT.X1_LARGE};
  `,
  content: css`
    padding-bottom: 15px;
    & p {
      font-size: ${FONT.LARGE};
      padding-bottom: 10px;
    }
  `,
};
