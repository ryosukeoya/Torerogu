import React from 'react';
import type { VFC } from 'react';
import { SerializedStyles } from '@emotion/react';

type Props = {
  title: string;
  texts: string[];
  _css: SerializedStyles;
};

const Select: VFC<Props> = ({ title, texts, _css }) => {
  return (
    <select css={_css} name={title}>
      <option hidden>{title}</option>
      {texts?.map((text: string, i: number) => {
        return (
          <option key={i} value={text}>
            {text}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
