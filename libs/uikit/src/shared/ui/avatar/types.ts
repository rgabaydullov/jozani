import { AvatarProps } from '@mui/material';
import { CSSProperties } from 'react';

export interface IAvatarProps extends Omit<AvatarProps, 'sizes'> {
  size?: string | number;
  style?: CSSProperties;
};
