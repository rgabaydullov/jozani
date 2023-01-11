import React from 'react';
import { StackStyled } from './shared/ui';
import { IStackProps } from './types';

const Stack: React.FC<IStackProps> = (props) => (
  <StackStyled {...props} />
);

export default React.memo(Stack);
