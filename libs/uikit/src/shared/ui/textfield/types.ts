import { StandardTextFieldProps } from '@mui/material';

export interface ITextFieldProps extends Omit<StandardTextFieldProps,
  'disabled' |
  'fullWidth' |
  'multiline' |
  'value' |
  'onChange'
> {
  isContrast?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isMultiline?: boolean;
  isDynamicMultiline?: boolean;
  value: string;
  onChange?(value: string): void;
};

export enum KeyboardCodes {
  Enter = 'Enter',
  Space = 'Space',
}
