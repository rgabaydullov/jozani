import React from 'react';
import { Grid } from '@mui/material';
import { IColProps } from './types';

const Col: React.FC<IColProps> = ({ sx, ...props }) => (
  <Grid
    item
    sx={{
      ...sx,
      flex: 1,
    }}
    {...props}
  />
);

export default React.memo(Col);
