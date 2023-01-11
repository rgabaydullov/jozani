import { ButtonProps, IconButtonProps } from '@mui/material';

export interface IButtonProps extends ButtonProps {
  component?: React.FC<any>;
  to?: string;
};

export type IIconButtonProps = IconButtonProps;
