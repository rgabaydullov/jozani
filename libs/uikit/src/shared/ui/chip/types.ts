import { ChipProps } from '@mui/material';
import { ReactNode } from 'react';

export interface IChipProps extends Omit<ChipProps, 'children'> {
  children?: ReactNode;
};
