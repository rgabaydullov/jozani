import React from 'react';
import { IconButton as MuiIconButton } from '@mui/material';
import { IIconButtonProps } from '../types';

const IconButton: React.FC<IIconButtonProps> = (props) => {
  return (
    <MuiIconButton {...props} />
  );
};

export default IconButton;
