import React from 'react';
import { Box as MuiBox } from '@mui/material';
import { IBoxProps } from './types';

const Box: React.FC<IBoxProps> = (props) => (
  <MuiBox {...props} />
);

export default React.memo(Box);
