import { useState, Dispatch, SetStateAction } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { orange } from '@mui/material/colors';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props<T extends { [key: string]: any }> = {
  initIsChecked?: boolean;
  data: T;
  handleClick?: (isChecked: boolean, data: T) => void | Dispatch<SetStateAction<boolean>>;
};

export const CheckboxMU = <T,>({ initIsChecked, data, handleClick }: Props<T>) => {
  const [isChecked, setIsChecked] = useState<boolean>(initIsChecked ? initIsChecked : false);

  const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    handleClick && handleClick(isChecked, data);
    setIsChecked((prevChecked: boolean) => !prevChecked);
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
