import React from 'react';
import type { VFC } from 'react';
import { SerializedStyles } from '@emotion/react';

type Props = {
  name: string;
  // option: string[];
  values: string[];
  _css: SerializedStyles;
};

const Select: VFC<Props> = ({ name, values, _css }) => {
  return (
    <select css={_css} name={name}>
      <option hidden >{name}</option>
      {values?.map((value) => {
        return (
          <option key={value.toString()} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
