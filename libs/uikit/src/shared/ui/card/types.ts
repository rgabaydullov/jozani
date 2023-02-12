import { CardProps } from '@mui/material';
import { ReactNode } from 'react';

export interface ICardProps extends Omit<CardProps,
  'title'
> {
  isFullWidth?: boolean;
  isFullHeight?: boolean;
  title?: ReactNode;
  footer?: ReactNode;
};
