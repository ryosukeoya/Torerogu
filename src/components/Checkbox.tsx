import React, { Dispatch, SetStateAction, useState } from 'react';
import type { VFC } from 'react';

type Props = {
  initIsChecked?: boolean;
  title: string;
  id?: number;
  handleClick?: (id: number, isChecked: boolean) => void | Dispatch<SetStateAction<boolean>>;
};

const Checkbox: VFC<Props> = ({ initIsChecked, title, id, handleClick }) => {
  const [isChecked, setIsChecked] = useState<boolean>(initIsChecked ? initIsChecked : false);
  return (
    <>
      <input
        type='checkbox'
        id='custom'
        value=''
        defaultChecked={isChecked}
        onClick={() => {
          id && handleClick && handleClick(id, isChecked);
          setIsChecked((prev) => !prev);
        }}
      />
      <label htmlFor='custom' className='custom-style'>
        {title}
      </label>
    </>
  );
};

export default Checkbox;
