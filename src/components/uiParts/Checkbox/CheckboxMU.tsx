import React, { useState } from 'react';
import type { VFC, Dispatch, SetStateAction } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { orange } from '@mui/material/colors';

type Props = {
  initIsChecked?: boolean;
  id?: number;
  handleClick?: (id: number, isChecked: boolean) => void | Dispatch<SetStateAction<boolean>>;
};

/**
 * material ui 
 */
const CheckboxMU: VFC<Props> = ({ initIsChecked, id, handleClick }) => {
  const [isChecked, setIsChecked] = useState<boolean>(initIsChecked ? initIsChecked : false);

  const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    id && handleClick && handleClick(id, isChecked);
    setIsChecked((prev) => !prev);
  };

  return (
    <Checkbox
      checked={isChecked}
      onClick={(e) => handleChange(e)}
      sx={{
        color: orange[500],
        '&.Mui-checked': {
          color: orange[500],
        },
      }}
    />
  );
};

export default CheckboxMU;
