import { GridProps } from '@mui/material';

type Breakpoint = boolean | number | string;

export interface IColProps extends Omit<GridProps, 'container'> {
  desktop?: Breakpoint;
  tablet?: Breakpoint;
  mobile?: Breakpoint;
};
