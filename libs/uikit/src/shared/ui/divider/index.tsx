import React from 'react';
import { StyledDivider } from './shared/ui';
import { IDividerProps } from './types';

const Divider: React.FC<IDividerProps> = (props) => (
  <StyledDivider {...props} />
);

export default React.memo(Divider);
