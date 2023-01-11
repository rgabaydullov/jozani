import { CheckboxProps } from '@mui/material';

export interface ICheckboxProps extends Omit<CheckboxProps,
  'checked' |
  'required' |
  'icon' |
  'checkedIcon' |
  'name'
> {
  isChecked?: boolean;
  isRequired?: boolean;
  label?: string;
  name: string;
}
