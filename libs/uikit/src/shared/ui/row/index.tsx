import React from 'react';
import { Grid } from '@mui/material';
import { IRowProps } from './types';

const Row: React.FC<IRowProps> = (props) => (
  <Grid container {...props} />
);

export default React.memo(Row);
